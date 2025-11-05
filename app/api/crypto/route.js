export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`CoinGecko API failed: ${res.status}`);
    }

    const data = await res.json();

    // Ensure valid array
    if (!Array.isArray(data)) {
      throw new Error("Unexpected API response format");
    }

    return Response.json(data);
  } catch (error) {
    console.error("❌ Error fetching crypto data:", error.message);
    return Response.json(
      { error: "Failed to fetch crypto data. Try again later." },
      { status: 500 }
    );
  }
}
