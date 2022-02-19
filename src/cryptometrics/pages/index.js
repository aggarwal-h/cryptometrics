import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoMetrics</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl font-extrabold text-center mt-5">
        CryptoMetrics
      </div>
    </div>
  );
}
