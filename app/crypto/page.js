import Link from "next/link";
import LiveCrypto from "./LiveCrypto";

export default async function CryptoDashboard() {
  const res = await fetch("http://127.0.0.1:3000/api/crypto", { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="text-center mt-10">
      <h1 className="text-4xl font-bold text-amber-500 mb-6">
        💰 Multi-Coin Hybrid Dashboard
      </h1>

      <LiveCrypto initialData={data} />
     <div className="mt-16 flex space-x-6 justify-center">
        <Link
          href="/about"
          className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          ⚙️ About
        </Link>
        <Link
          href="/"
          className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </main>
  );
}
