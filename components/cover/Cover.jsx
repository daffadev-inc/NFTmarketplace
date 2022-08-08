import { useContractMetadata, useAddress, useMetamask, useWalletConnect, useCoinbaseWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { IconName } from "react-icons/io5";
import { MARKETPLACE_ADDRESS } from "../../const/contract";
import styles from "../../styles/Theme.module.scss";

export default function Footer() {
  const { contractMetadata, isLoading: loadingMetadata } = useContractMetadata(MARKETPLACE_ADDRESS);

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  return (
<div className={styles.loadingOrError}>
          {!loadingMetadata ? (
        <>
            <h2>Sign Your Wallet</h2>
        </>
          ) : (
            <p className="lead">authorized...</p>
          )}
</div>
  );
}
