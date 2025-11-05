"use client"
import Link from 'next/link';
import './globals.css'
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout =  pathname === "/my-pages"
  return (
    <html lang="en">
      <body className="bg-black text-white ">
        {!hideLayout  && (
      <header className="absolute top-0 left-0 w-full bg-[#0f1115] flex justify-between items-center px-10 py-5 shadow-md ">
        <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
          CryptoPulse 💎
        </h1>

        <nav className="space-x-6 text-gray-300 text-lg">
          <Link href="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link href="/crypto" className="hover:text-amber-400 transition">
            Crypto
          </Link>
        </nav>
      </header>
        )}

        <main className="min-h-screen">{children}</main>

        {!hideLayout && (
          <footer className="mt-20 border-t border-gray-700 pt-6 text-gray-500 text-center">
        <p>© 2025 CryptoPulse  | Built with ❤️ by Aman Legends</p>
      </footer>
        )}
      </body>
    </html>
  )
}