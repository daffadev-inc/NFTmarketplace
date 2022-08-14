import Link from "next/link";
import styles from "../styles/Theme.module.scss";
import { IoLogoUsd, IoImages, IoShareOutline } from "react-icons/io5";

export default function FooBar() {

  return (
<>
<div className={styles.mobile_only}>
<div className={styles.bottomBar}>
        <Link href="/upload_nft">
          <a className={styles.headerItem} style={{margin: 0}}><IoShareOutline /> Upload</a>
        </Link>
            <p style={{margin: 0}}>|</p>
        <Link href="/nft_collection">
          <a className={styles.headerItem} style={{margin: 0}}><IoImages /> Collection</a>
        </Link>
            <p style={{margin: 0}}>|</p>
        <Link href="/resell_nft">
          <a className={styles.headerItem} style={{margin: 0}}><IoLogoUsd /> Resell</a>
        </Link>
</div>
</div>
</>
  );
}
