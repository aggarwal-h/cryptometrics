import Head from "next/head";
import Container from "../components/content/Container";
import Main from "../components/content/Main";
import BoldGradientHeading from "../components/titles/BoldGradientHeading";
import Wrapper from "../components/content/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import CompareChart from "../components/charts/CompareChart";
import Navbar from "../components/navbar/Navbar";

export default function Compare() {
  return (
    <div>
      <Head>
        <title>CryptoMetrics - Compare</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Wrapper>
        <Sidebar active="compare" />
        <Main>
          <Container>
            {/* Header */}
            <div className="flex flex-row justify-between mb-4 mt-20 sm:mt-14 md:mt-4 lg:mt-0">
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
