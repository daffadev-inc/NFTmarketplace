import { useAddress, useDisconnect, useChainId } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { IoWallet, IoLogOut, IoImages, IoPush } from "react-icons/io5";
import styles from "../styles/Theme.module.scss";
import Modal from '../components/utils/Modal'

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const address = useAddress();
  const disconnectWallet = useDisconnect();
  const chainId = useChainId();
 

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
        <Link href="/upload_nft">
          <a className={styles.headerItem}><IoPush /> Upload NFT</a>
        </Link>
</div>
</div>
      </div>

      <div className={styles.right}>
<div className={styles.networkId}>{chainId}</div>
        {address ? (
          <>
<div className={styles.pils}>
            <p style={{margin: 0}}>{address.slice(0, 2).concat("_").concat(address.slice(-4))}</p>
            <p className={styles.verticalSpacer}>|</p>
            <a
              className={styles.iconButton}
              onClick={() => disconnectWallet()}
            >
              <IoLogOut className={styles.walletIcon} />
            </a>
</div>
          </>
        ) : (
          <a
            className={styles.iconButton} 
            onClick={() => setShowModal(true)}
          >
            <IoWallet className={styles.walletIcon} />
          </a>
        )}
      </div>
            <Modal onClose={() => setShowModal(false)}
                show={showModal}></Modal>
    </div>
  );
}

