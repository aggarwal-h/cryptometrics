import Head from "next/head";
import Container from "../components/content/Container";
import Main from "../components/content/Main";
import BoldGradientHeading from "../components/titles/BoldGradientHeading";
import Wrapper from "../components/content/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";

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
            <div className="flex flex-row justify-between">
              {/* Main Project Title */}
              <BoldGradientHeading>Compare</BoldGradientHeading>
            </div>
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}
