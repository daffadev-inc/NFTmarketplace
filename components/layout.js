import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { IoChevronForwardOutline } from "react-icons/io5";

const name = '[DaffaDev]'
export const siteTitle = 'DaffaDev Blog n NFTs'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container_blogs}>
        <div className={styles.blog_content}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/avatar.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <section className={utilStyles.headingMd}>
        <p>Simple Blogging n Selling NFTs</p>
        <small>
          web3 App build w/ {' '}
          <a style={{color: '#ffeb3b'}} target="_blank" href="https://github.com/daffadev-inc/NFTmarketplace"  rel="noreferrer">thirdweb SDK</a>.
        </small>
        <div className={styles.backToHome}>
          <Link href="/airdrop_uc">
            <a className={utilStyles.button}>Airdrop Token   <IoChevronForwardOutline /> </a>
          </Link>
        </div>
      </section>
          </>
        ) : (
          <>
                <Image
                  priority
                  src="/images/avatar.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
            <h1 className={utilStyles.heading2Xl}>{name}
            </h1>
          </>
        )}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/airdrop_uc">
            <p className={utilStyles.claim} style={{cursor: 'pointer'}}>Claim Airdrop</p>
          </Link>
          <Link href="/">
            <a className={utilStyles.button}>← Back to home</a>
          </Link>
        </div>
      )}
      </header>
      <main className={utilStyles.bgMain}>{children}</main>
        </div>
    </div>
  )
}
