import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState, useEffect } from "react";
import { TOKEN_DROP_ADDRESS } from "../../const/contract";
import truncateAddress from "../../lib/truncateAddress";
import styles from "./Styled.module.scss";

export default function TokenHolders() {
  const [loading, setLoading] = useState(true);
  const [holders, setHolders] = useState([]);
  async function checkHolders() {
    const sdk = new ThirdwebSDK("mumbai"); // configure this to your network

    const token = sdk.getToken(TOKEN_DROP_ADDRESS);

    const balances = await token.history.getAllHolderBalances();
    setHolders(balances);
    setLoading(false);
  }

  useEffect(() => {
    checkHolders();
  }, []);

  if (loading) {
    return <div className={styles.loadingOrError}><i className={styles.spinner}></i></div>;
  }

  return (
    <>
      <div className={styles.cardStyle2}>
      <h4 style={{margin: '0'}}>Token Holders</h4>
        {holders
          .sort(
            (a, b) =>
              parseInt(b.balance.displayValue) -
              parseInt(a.balance.displayValue)
          )
          .map((holder) => (
            <div
              key={holder.holder}
              className={`${styles.holderItem} ${styles.spacerBottom}`}
            >
              <p>{truncateAddress(holder.holder)}</p>
              <p>
                {holder.balance.displayValue} {holder.balance.symbol}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
