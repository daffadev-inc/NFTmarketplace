import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from 'next/head';
import Header from "../components/Header";
import FootBar from "../components/FooBar";
import "../styles/globals.css";

const siteTitle = 'DaffaDev Blog n NFTs'

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <FootBar />
    </ThirdwebProvider>
  );
}

export default MyApp;
