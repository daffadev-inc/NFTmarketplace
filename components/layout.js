import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import styles from "../styles/Theme.module.scss";
import Link from 'next/link';
import { IoChevronForwardOutline } from "react-icons/io5";

const name = '[DaffaDev]'
export const siteTitle = 'DaffaDev Blog n NFTs'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container_blogs}>
        <div className={styles.blog_content}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Simple blogging and selling NFTs"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&images=https%3A%2F%2Ftestnet-96849d.netlify.app%2F_next%2Fstatic%2Fmedia%2Favatar.59e483d6.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1171588080744378'></script>
      </Head>
      <header className={styles.headerProfile}>
        {home ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/airdrop_uc" passHref>
            <p className={styles.claim} style={{cursor: 'pointer'}}>Claim Airdrop</p>
          </Link>
          <Link href="/">
            <a className={styles.button}>← Back to home</a>
          </Link>
        </div>
      )}
      </header>
      <main className={styles.bgMain}>{children}</main>
        </div>
    </div>
  )
}
