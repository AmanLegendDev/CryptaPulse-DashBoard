"use client";
import { useState, useEffect } from "react";

export default function LiveCrypto({ initialData }) {
  const [crypto, setCrypto] = useState(initialData || []);
  const [error, setError] = useState(null);

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

  if (error)
    return <p className="text-red-400 text-center mt-4">{error}</p>;

  if (!crypto.length)
    return <p className="text-gray-500 text-center mt-4">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 text-emerald-400">
      {crypto.map((coin) => (
        <div
          key={coin.id}
          className="border rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-200"
        >
          <img
            src={coin.image || "/fallback.png"}
            alt={coin.name}
            className="w-10 h-10 mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-amber-400">{coin.name}</h2>
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
        </div>
      ))}
    </div>
  );
}
