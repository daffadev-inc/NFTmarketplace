import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React, { useState } from "react";

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingXs} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, image, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Image src={image} className={utilStyles.img_blog} width={640} height={420} alt=""/>
              <Link href={`/posts/${id}`}>
                <a style={{fontSize: 'medium', color: '#fff'}}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText} style={{fontSize: 'x-small'}}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
