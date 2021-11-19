import Link from 'next/link'
import Head from "next/head"
import Layout from '../../components/layout'
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel="icon" />
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}