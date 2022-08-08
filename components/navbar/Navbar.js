import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { IoWallet, IoLogOut, IoListSharp, IoChevronForwardOutline, IoCloseCircle } from "react-icons/io5";
import nav from "./Style.module.scss";
import Modal from '../../components/utils/Modal'

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
<>
<div className={nav.header}>
<div className={nav.flexCenter}>
        <Link href="/" passHref>
          <Image
            src={`/logo.png`}
            alt="Logo"
            className={nav.headerLogo}
            width={135} height={38}
          />
        </Link>
    <div className={nav.desktop_only}>
        <Link href="/nft_collection">
          <a className={nav.headerItem}>NFT Collection</a>
        </Link>
        <Link href="/upload_nft">
          <a className={nav.headerItem}>Upload NFTs</a>
        </Link>
    </div>
</div>
      <div className={nav.right}>
        {address ? (
          <>
<div className={nav.pils}>
            <p style={{margin: 0}}>{address.slice(0, 2).concat("_").concat(address.slice(-4))}</p>
            <p style={{margin: 0}}>|</p>
            <a
              className={nav.iconButton}
              onClick={() => disconnectWallet()}
            >
              <IoLogOut size={32} color={'white'} />
            </a>
</div>
          </>
        ) : (
          <a
            className={nav.iconButton} 
            onClick={() => setShowModal(true)}
          >
            <IoWallet size={32} color={'white'} />
          </a>
        )}
      </div>
</div>
<div className={nav.mobile_only}>
  <input type='checkbox' className={nav.openSidebarMenu} id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className={nav.sidebarIconToggle}>
<IoListSharp size={36} />
  </label>
  <div id={nav.sidebarMenu}>
    <ul className={nav.sidebarMenuInner}>
      <li>Jelena Jovanovic <span>Web Developer</span></li>
      <li className={nav.flexBetween}><Link href="/nft_collection"><a style={{display: 'contents'}}>NFT Collection <IoChevronForwardOutline /></a></Link></li>
      <li className={nav.flexBetween}><Link href="/upload_nft"><a style={{display: 'contents'}}>UpLoad NFT <IoChevronForwardOutline /></a></Link></li>
    </ul>
  </div>
</div>

            <Modal onClose={() => setShowModal(false)}
                show={showModal}></Modal>
</>
  );
}
