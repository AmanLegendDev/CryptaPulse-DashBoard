"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WatchlistPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("MyWatchList") || "[]");
    setCoins(saved);
  }, []);

  const HandleDelete = (id) => {
    const existing = JSON.parse(localStorage.getItem("MyWatchList") || "[]");
    const updated = existing.filter((coin) => coin.id !== id);
    localStorage.setItem("MyWatchList", JSON.stringify(updated));
    setCoins(updated);
  };

  return (
    <main className="min-h-screen px-6 py-20 text-center">

      <motion.h1
        className="text-4xl font-bold text-amber-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        ⭐ My Watchlist
      </motion.h1>

      {coins.length === 0 && (
        <motion.h2
          className="text-amber-200 text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No coins saved yet…
        </motion.h2>
      )}

      {/* ✅ ULTRA FAST STAGGER */}
      <motion.div
  key={coins.length}   // ✅ rerun animation immediately when data arrives
  className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 text-emerald-400"
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }, // ✅ SUPER FAST
  }}
>
  {coins.map((coin) => (
    <motion.div
      key={coin.id}
      variants={{
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.2, ease: "easeOut" }} // ✅ ultra quick
      whileHover={{ scale: 1.04, y: -4 }}
      className="relative border border-gray-700 rounded-xl p-4 bg-[#141414] shadow-md z-10"
    >

            {/* ✅ FIXED OUTER GLOW — NOW OUTSIDE ONLY */}
            <motion.div
              className="
              absolute 
              inset-0
              -z-10
              rounded-xl 
              pointer-events-none
            "
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                boxShadow: "0 0 30px 6px rgba(255, 200, 0, 0.35)",
              }}
            />

            {/* ✅ CONTENT */}
            <img
              src={coin.image}
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

            {/* ✅ Delete Button */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => HandleDelete(coin.id)}
              className="p-2 text-xl font-bold mt-2"
            >
              <span className="text-amber-400">🗑</span> Remove
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
