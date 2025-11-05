export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch data from CoinGecko");

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return Response.json({ error: "Failed to fetch crypto data" }, { status: 500 });
  }
}
