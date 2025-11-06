

// | Watchlist | Animations on delete | ⭐⭐        |
// | Navbar    | Clean minimal reveal | ⭐⭐        |



export async function GET() {
  try {
    // ✅ Use absolute URL for API (CoinGecko)
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; AmanLegendDev/1.0; +https://crypta-pulse-dash-board.vercel.app)",
      },
      // 👇 Important for Vercel: avoids API rate-limit blocking
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      console.error("CoinGecko failed with:", res.status);
      return Response.json({ error: "CoinGecko API unavailable" }, { status: 503 });
    }

    const data = await res.json();

    // ✅ Filter only important fields
    const coins = data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));

    return Response.json(coins);
  } catch (err) {
    console.error("❌ Fetch failed:", err.message);
    return Response.json(
      { error: "Server failed to fetch crypto data (CoinGecko down or throttled)" },
      { status: 500 }
    );
  }
}
