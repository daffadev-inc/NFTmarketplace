import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Header from "../components/Header";
import FootBar from "../components/FooBar";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Header />
      <Component {...pageProps} />
      <FootBar />
    </ThirdwebProvider>
  );
}

export default MyApp;
