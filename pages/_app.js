import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Script from 'next/script'
import Head from 'next/head'
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
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1171588080744378'></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <FootBar />
    </ThirdwebProvider>
  );
}

export default MyApp;
