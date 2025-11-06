"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LiveCrypto from "./LiveCrypto";

export default function CryptoClient({ data }) {
  return (
    <main className="text-center mt-24 px-2">
      
      {/* ✅ Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-amber-500 mb-3"
      >
        💰 Multi-Coin Hybrid Dashboard
      </motion.h1>

      {/* ✅ Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 max-w-xl mx-auto mb-8"
      >
        Live prices with SSR + CSR hybrid rendering ⚡
      </motion.p>

      {/* ✅ LiveCrypto Animated Wrapper */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <LiveCrypto initialData={data} />
      </motion.div>

      {/* ✅ Buttons */}
      <div className="mt-16 flex space-x-6 justify-center">
        <motion.div whileHover={{ scale: 1.06 }}>
          <Link
            href="/about"
            className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
          >
            ⚙️ About
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.06 }}>
          <Link
            href="/"
            className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            ⬅️ Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
