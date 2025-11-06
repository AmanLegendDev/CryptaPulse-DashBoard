import CryptoClient from "./CryptoClient";

export default async function CryptoDashboard() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "https://crypta-pulse-dash-board.vercel.app"}/api/crypto`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return <CryptoClient data={data} />;
}
