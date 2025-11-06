"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LiveCrypto({ initialData }) {
  const [crypto, setCrypto] = useState(initialData || []);
  const [error, setError] = useState(null);

  // ✅ Fetch Function
  const fetchData = async () => {
    try {
      const res = await fetch("/api/crypto");
      const data = await res.json();

      if (!res.ok || data.error) throw new Error(data.error || "API Error");

      if (!Array.isArray(data)) throw new Error("Invalid API format");

      setCrypto(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch crypto data:", err);
      setError("⚠️ Failed to fetch live prices");
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Watchlist Logic
  const handleWatchlist = (coin) => {
    const existing = JSON.parse(localStorage.getItem("MyWatchList") || "[]");
    const already = existing.some((item) => item.id === coin.id);

    if (!already) {
      const updated = [...existing, coin];
      localStorage.setItem("MyWatchList", JSON.stringify(updated));
    }
  };

  // ✅ Error UI
  if (error)
    return <p className="text-red-400 text-center mt-4">{error}</p>;

  // ✅ Loading UI
  if (!crypto.length)
    return <p className="text-gray-500 text-center mt-4">Loading...</p>;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 text-emerald-400"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {crypto.map((coin) => (
        <motion.div
          key={coin.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            y: -6,
            boxShadow: "0px 0px 25px rgba(255, 200, 50, 0.25)",
          }}
          className="relative border rounded-xl p-4 shadow-md bg-[#141414] overflow-hidden"
        >
          {/* ✅ Glow Behind Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-2 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 blur-xl opacity-0"
          />

          {/* ✅ Actual Card Content */}
          <div className="relative z-10">
            <img
              src={coin.image || "/fallback.png"}
              alt={coin.name}
              className="w-10 h-10 mx-auto mb-2"
            />

            <h2 className="text-lg font-semibold text-amber-400">
              {coin.name}
            </h2>

            <p className="text-xl font-bold">
              ${coin.current_price ? coin.current_price.toFixed(2) : "N/A"}
            </p>

            <p
              className={`text-sm ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h?.toFixed(2) ?? 0}%
            </p>

            <motion.button
              whileTap={{ scale: 0.85 }}
              className="mt-2 p-2 text-xl"
              onClick={() => handleWatchlist(coin)}
            >
              ⭐ Add to Watchlist
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
