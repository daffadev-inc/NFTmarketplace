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
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Simple blogging and selling NFTs"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&images=https%3A%2F%2Ftestnet-96849d.netlify.app%2F_next%2Fstatic%2Fmedia%2Favatar.59e483d6.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1171588080744378'
     crossorigin='anonymous'></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <FootBar />
    </ThirdwebProvider>
  );
}

export default MyApp;
