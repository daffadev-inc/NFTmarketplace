import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { IoWallet, IoLogOut, IoImages, IoPush } from "react-icons/io5";
import styles from "../styles/Theme.module.scss";
import Modal from '../components/utils/Modal'

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/" passHref>
          <Image
            src={`/logo.png`}
            alt="Logo"
            className={styles.headerLogo}
            width={135} height={38}
          />
        </Link>
<div className={styles.desktop_only}>
<div className={styles.flexCenter}>
        <Link href="/nft_collection">
          <a className={styles.headerItem}><IoImages /> NFTs Collection</a>
        </Link>
        <Link href="/resell_nft">
          <a className={styles.headerItem}><IoPush /> Resell NFT</a>
        </Link>
</div>
</div>
      </div>

      <div className={styles.right}>
        {address ? (
          <>
<div className={styles.pils}>
            <p style={{margin: 0}}>{address.slice(0, 2).concat("_").concat(address.slice(-4))}</p>
            <p className={styles.verticalSpacer}>|</p>
            <a
              className={styles.iconButton}
              onClick={() => disconnectWallet()}
            >
              <IoLogOut size={32} />
            </a>
</div>
          </>
        ) : (
          <a
            className={styles.iconButton} 
            onClick={() => setShowModal(true)}
          >
            <IoWallet size={32} />
          </a>
        )}
      </div>
            <Modal onClose={() => setShowModal(false)}
                show={showModal}></Modal>
    </div>
  );
}
