import Image from 'next/image';
import Link from 'next/link';
import { IoChevronForwardOutline } from "react-icons/io5";
import styles from '../../styles/Theme.module.scss';

const name = '[DaffaDev]'
export const siteTitle = 'DaffaDev Blog n NFTs'

export default function navProfile({ children, home }) {
  return (
      <header className={styles.headerProfile}>
            <Image
              priority
              src="/images/avatar.png"
              className={styles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
      <section className={styles.headingMd}>
        <p>Simple Blogging n Selling NFTs</p>
        <small>
          web3 App build w/ {' '}
          <a style={{color: '#ffeb3b'}} target="_blank" href="https://github.com/daffadev-inc/NFTmarketplace"  rel="noreferrer">thirdweb SDK</a>.
        </small>
        <div className={styles.backToHome}>
          <Link href="/airdrop_uc">
            <a className={styles.button}>Airdrop Token   <IoChevronForwardOutline /> </a>
          </Link>
        </div>
      </section>
      </header>
  )
}
