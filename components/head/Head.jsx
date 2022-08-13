import Script from 'next/script';

export const siteTitle = 'DaffaDev Blog n NFTs'

export default function Head() {
  return (
      <>
        <title>{siteTitle}</title>
        <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1171588080744378' strategy="beforeInteractive" />
      </>
  )
}
