import Link from "next/link";
import styles from "../styles/Theme.module.scss";
import { IoHome, IoImages, IoPush } from "react-icons/io5";

export default function FooBar() {

  return (
<>
<div className={styles.mobile_only}>
<div className={styles.bottomBar}>
        <Link href="/">
          <a className={styles.headerItem} style={{margin: 0}}><IoHome /> Blog</a>
        </Link>
            <p style={{margin: 0}}>|</p>
        <Link href="/nft_collection">
          <a className={styles.headerItem} style={{margin: 0}}><IoImages /> Collection</a>
        </Link>
            <p style={{margin: 0}}>|</p>
        <Link href="/upload_nft">
          <a className={styles.headerItem} style={{margin: 0}}><IoPush /> Upload</a>
        </Link>
</div>
</div>
</>
  );
}
