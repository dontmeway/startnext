import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from "../styles/utils.module.css"


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{"siteTitle"}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/posts/first-post">Go</Link>
    </Layout>
  )
}
