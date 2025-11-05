import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b-from-[#0a0a0a] to-[#0e1012] text-white px-6 py-16 flex flex-col items-center mt-10">
      
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-amber-500 mb-4 text-center">
        About <span className="text-emerald-400">CryptoPulse 💎</span> 💎
      </h1>

      <p className="text-gray-400 text-lg text-center max-w-3xl leading-relaxed">
        Welcome to <span className="text-amber-400 font-semibold">CryptoPulse 💎</span> — a
        futuristic project built by passionate minds who believe technology can simplify 
        finance. Our mission? To make real-time crypto insights accessible, fast, and beautiful 
        for everyone.
      </p>

      {/* Section Divider */}
      <div className="w-24 h-{2px} bg-amber-400 mt-8 mb-12"></div>

      {/* Mission Section */}
      <section className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400">⚡ Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            We aim to merge the power of{" "}
            <span className="text-amber-400">Next.js</span> and{" "}
            <span className="text-blue-400">real-time APIs</span> to create
            dashboards that are not only fast, but intelligent. 
            Our hybrid rendering model (SSR + CSR) ensures instant load times
            and seamless live updates — the way financial tech should feel.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The crypto market never sleeps — and neither should your data. That’s
            why we built CryptoPulse 💎 to revalidate, update, and evolve without
            reloads or delays.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r- from-amber-500 via-emerald-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition"></div>
            <img
              src="/crypto.jpeg"
              alt="Crypto Vision"
              className="relative rounded-lg w-[360px] md:w-[420px] border border-gray-700 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mt-24 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold text-amber-500 mb-4">
          👑 The Mind Behind It
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          CryptoPulse 💎 is built by <span className="text-emerald-400 font-semibold">Aman Legends</span> —
          a developer who believes in learning fast, building smarter, and creating tools that inspire.
          What started as a 90-day personal challenge turned into a mission to craft futuristic digital experiences.
        </p>
        <p className="text-gray-500 text-sm italic">
          “I don’t chase trends. I build the next one.” – Aman Legends 🧠
        </p>
      </section>

      {/* CTA */}
      <div className="mt-16 flex space-x-6">
        <Link
          href="/crypto"
          className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          🚀 View Live Crypto Dashboard
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
