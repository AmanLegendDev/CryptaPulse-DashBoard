"use client"
import {motion}  from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">
      {/* 🧠 Header */}
      

      {/* 🪙 Hero Section */}

      <section className="flex flex-col items-center mt-28 text-center max-w-3xl">
        < motion.h1 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6,ease: "easeOut"}}
        
        className="text-5xl md:text-6xl font-extrabold text-amber-500 mb-4">
          Track. Learn. Grow.
        </motion.h1>


        <motion.p 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut"}}
        
        className="text-gray-400 text-lg mb-8 leading-relaxed">
          Stay ahead of the market with real-time crypto insights powered by
          <span className="text-emerald-400"> Next.js Hybrid Rendering </span> 
          and data from 
          <span className="text-blue-400"> CoinGecko API.</span>
        </motion.p>



        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/crypto"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition duration-300"
        >
          🚀 Explore Live Dashboard
        </Link>
        </motion.div>
      </section>

      {/* ⚡ Features Section */}
      <motion.section 
      initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      
      
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl text-center">
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
     <motion.div
  key={card.title}
  whileHover={{ scale: 1.05, y: -6 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="relative p-6 rounded-2xl border border-gray-700 bg-[#141414] shadow-md"
>

  {/* ✅ GLOW LAYER (STAYS ON WHILE HOVERING) */}
  <motion.div
    className="absolute inset-0 rounded-2xl -z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    style={{
      boxShadow: "0 0 35px 12px rgba(255, 200, 0, 0.45)",
    }}
  />

  {/* ✅ MAIN CONTENT */}
  <div className="relative z-10">
    <h2 className="text-3xl mb-4">{card.icon}</h2>
    <h3 className="text-xl font-semibold text-amber-400 mb-3">
      {card.title}
    </h3>
    <p className="text-gray-400">{card.desc}</p>
  </div>

</motion.div>





        ))}
      </motion.section>

     
      
    </main>
  );
}
