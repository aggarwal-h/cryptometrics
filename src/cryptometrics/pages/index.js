import Head from "next/head";
import Container from "../components/content/Container";
import Main from "../components/content/Main";
import SearchInput from "../components/inputs/SearchInput";
import BoldGradientHeading from "../components/titles/BoldGradientHeading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoMetrics</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <div className="flex flex-row justify-between">
            <BoldGradientHeading>CryptoMetrics</BoldGradientHeading>
            <SearchInput />
          </div>
        </Container>
      </Main>
    </div>
  );
}
