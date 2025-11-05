import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">
      {/* 🧠 Header */}
      

      {/* 🪙 Hero Section */}
      <section className="flex flex-col items-center mt-28 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-500 mb-4">
          Track. Learn. Grow.
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Stay ahead of the market with real-time crypto insights powered by
          <span className="text-emerald-400"> Next.js Hybrid Rendering </span> 
          and data from 
          <span className="text-blue-400"> CoinGecko API.</span>
        </p>

        <Link
          href="/crypto"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition duration-300"
        >
          🚀 Explore Live Dashboard
        </Link>
      </section>

      {/* ⚡ Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl text-center">
        {[
          {
            icon: "📈",
            title: "Real-Time Updates",
            desc: "Get the latest live market data with zero refresh delay using ISR and CSR.",
          },
          {
            icon: "💼",
            title: "Hybrid Rendering",
            desc: "Experience superfast SSR rendering merged with dynamic client-side updates.",
          },
          {
            icon: "🧠",
            title: "Smart Insights",
            desc: "Know which crypto is trending and track performance like a pro trader.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="border border-gray-700 bg-[#141414] p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-md"
          >
            <h2 className="text-3xl mb-4">{card.icon}</h2>
            <h3 className="text-xl font-semibold text-amber-400 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* 💬 Footer */}
      
    </main>
  );
}
