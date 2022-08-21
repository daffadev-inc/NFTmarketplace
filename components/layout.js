import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import Adsense from './head/Head';
import Nav from './navbar/navProfile';
import styles from '../styles/Theme.module.scss';

const name = '[DaffaDev]'
export const siteTitle = 'DaffaDev Blog n NFTs'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container_blogs}>
        <div className={styles.blog_content}>
        <Adsense />
        <Header />
        {home ? (
        <Nav />
        ) : (
      <header className={styles.headerProfile}>
                <Image
                  priority
                  src="/images/avatar.png"
                  className={styles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
            <h1 className={styles.heading2Xl}>{name}
            </h1>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/airdrop" passHref>
            <p className={styles.claim} style={{cursor: 'pointer'}}>Claim Airdrop</p>
          </Link>
          <Link href="/">
            <a className={styles.button}>← Back to home</a>
          </Link>
        </div>
      )}
      </header>
    )}
      <main className={styles.bgMain}>{children}</main>
        </div>
    </div>
  )
}
