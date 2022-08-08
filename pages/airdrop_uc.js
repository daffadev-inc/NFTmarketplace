import styles from "../styles/Theme.module.scss";
import style from '../components/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from "next/link";

export default function Airdrop() {

  return (
<div className={styles.loadingOrError}><h2>On Progress<p/> Coming Soon</h2>
        <div className={style.backToHome}>
          <Link href="/">
            <a className={utilStyles.button}>← Back to home</a>
          </Link>
        </div>
</div>
  );
}
