"use client";

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/my-pages";

  // ✅ Mobile menu state
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden font-bold">
        {!hideLayout && (
          <header className="fixed top-0 left-0 w-full bg-[#0f1115] flex justify-between items-center px-6 md:px-10 py-5 shadow-md z-50">

            {/* ✅ Logo */}
            <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
              CryptoPulse 💎
            </h1>

            {/* ✅ Desktop Menu */}
            <nav className="hidden md:flex space-x-6 text-gray-300 text-lg">
              <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              <Link href="/about" className="hover:text-amber-400 transition">About</Link>
              <Link href="/crypto" className="hover:text-amber-400 transition">Crypto</Link>
              <Link href="/watchlist" className="hover:text-amber-400 transition">Watchlist</Link>
            </nav>

            {/* ✅ Mobile Hamburger */}
            <button
              className="md:hidden text-3xl text-amber-400"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </header>
        )}

        {/* ✅ MOBILE SLIDE-IN MENU */}
        <AnimatePresence>
          {open && (
            <>
              {/* ✅ Dark Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setOpen(false)}
              />

              {/* ✅ Slide Menu */}
              <motion.div
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                exit={{ x: -250 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-60 h-full bg-[#141414] shadow-xl z-50 p-6 flex flex-col space-y-6 text-lg"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-amber-400">
                    Menu
                  </h2>
                  <button onClick={() => setOpen(false)} className="text-2xl">
                    ✕
                  </button>
                </div>

                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-amber-400 transition"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="hover:text-amber-400 transition"
                >
                  About
                </Link>
                <Link
                  href="/crypto"
                  onClick={() => setOpen(false)}
                  className="hover:text-amber-400 transition"
                >
                  Crypto
                </Link>
                <Link
                  href="/watchlist"
                  onClick={() => setOpen(false)}
                  className="hover:text-amber-400 transition"
                >
                  Watchlist
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ✅ Main Content */}
        <main className="pt-24 min-h-screen">{children}</main>

        {/* ✅ Footer */}
        {!hideLayout && (
          <footer className="mt-20 border-t border-gray-700 pt-6 text-gray-500 text-center">
            <p>© 2025 CryptoPulse | Built with ❤️ by Aman Legends</p>
          </footer>
        )}
      </body>
    </html>
  );
}
