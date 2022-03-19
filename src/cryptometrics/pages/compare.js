import Head from "next/head";
import Container from "../components/content/Container";
import Main from "../components/content/Main";
import BoldGradientHeading from "../components/titles/BoldGradientHeading";
import Wrapper from "../components/content/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import CompareChart from "../components/charts/CompareChart";

export default function Compare() {
  return (
    <div>
      <Head>
        <title>CryptoMetrics - Compare</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Sidebar active="compare" />
        <Main>
          <Container>
            {/* Header */}
            <div className="flex flex-row justify-between mb-4">
              {/* Main Project Title */}
              <BoldGradientHeading>Compare</BoldGradientHeading>
            </div>
            <CompareChart />
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}
