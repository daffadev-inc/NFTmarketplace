import {
  useAddress,
  useNetwork,
  useNetworkMismatch,
  ChainId
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import styles from "./Styled.module.scss";

export default function Claim({ tokenDropContract }) {
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const address = useAddress();
  const amountToClaim = 10000.00;

  async function claim() {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(ChainId.Mumbai);
        return;
      }
 
     if (!amountToClaim || !address) {
      return;
     }

    try {
      const claimResult = await tokenDropContract?.claim(amountToClaim);
      console.log("Claimed", claimResult);
      Swal.fire({
  title: 'Berhasil!',
  text: 'Airdrop berhasil di claim',
  icon: 'success',
  confirmButtonText: 'Cool'
});
    } catch (e) {
      console.log(e);
      Swal.fire({
  title: 'Gagal!',
  text: 'Claim Airdrop Gagal...',
  icon: 'error',
  confirmButtonText: 'Okey'
});
    }
  }

  return (
    <div className={styles.claimBtn}>
{networkMismatch ? (
    <button onClick={() => switchNetwork(ChainId.Mumbai)} className={styles.claim_button}>
      Switch Network
    </button>
) : (
      <button onClick={claim} className={styles.claim_button}>
        Claim AirDrop
      </button>
)}
<div>
<p/>
<small>Token Contract :<br/> 0xcFf85eB0bdCE164274BF52eAf6A90da2251419c8 <br />TESTnet on Mumbai network</small>
</div>
    </div>
  );
}
