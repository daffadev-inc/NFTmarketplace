import { useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import styles from "./Styled.module.scss";

export default function Claim({ tokenDropContract }) {
  const address = useAddress();
  const amountToClaim = 10000.00;

  async function claim() {
    if (!amountToClaim || !address) {
      return;
    }

    try {
      const claimResult = await tokenDropContract?.claim(amountToClaim);
      console.log("Claimed", claimResult);
      alert("Successfully claimed!");
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }

  return (
    <div className={styles.claimBtn}>
      <button onClick={claim} className={styles.claim_button}>
        Claim AirDrop
      </button>
<div>
<p/>
<small>Token Contract :<br/> 0xcFf85eB0bdCE164274BF52eAf6A90da2251419c8</small>
</div>
    </div>
  );
}
