import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
import TokenHolders from "../components/airdrop/TokenHolders";
import Claim from "../components/airdrop/Claim";
import { TOKEN_DROP_ADDRESS } from "../const/contract";
import truncateAddress from "../lib/truncateAddress";
import styles from "../components/airdrop/Styled.module.scss";
import Link from "next/link";

export default function Airdrop() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const tokenDropContract = useTokenDrop(
    TOKEN_DROP_ADDRESS
  );

  return (
    <div className={styles.container}>
<div className={styles.airDropcontent}>
      {address ? (
<>
        <div className={styles.bannerDrop}>
          <a onClick={disconnectWallet} className={styles.secondaryButton}>
            Disconnect Wallet
          </a>
          <p style={{border: '2px dotted', padding: '0 10px'}}>Your address: {truncateAddress(address)}</p>
</div>
<div className={styles.airdropBox}>
    <div className={`${styles.dropContent} ${styles.cardStyle}`}>
        <div className={`${styles.claimBox}`}>
                  <h2>Claim Airdrop UC token</h2>
            <h1 style={{color: 'rgb(255 235 59)', textShadow: '2px 2px 4px #00000070'}}>10000.0 <span className={styles.symbol}>$</span> UC</h1>
                  <Claim tokenDropContract={tokenDropContract} />
        </div>
    </div>
      <TokenHolders />
</div>
        </>
      ) : (
<>
                  <h2>Sign your Wallet</h2>
      <TokenHolders />
</>
      )}

</div>
    </div>
  );
}
