import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import { fetchTodos } from '../lib/todos';
import utilsStyles from "../styles/utils.module.css"

const array = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]
export default function Home({ todos }) {
  const [completedData, setCompletedData] = useState([])
  useEffect(() => {
    setCompletedData(todos.filter(todo => todo.completed))
  }, [todos])

  const handleChange = (e, id) => {
    const currentTodo = todos.find(el => el.id === id)
    if (e.target.checked) {
      setCompletedData([...completedData, currentTodo])
    } else {
      setCompletedData(completedData.filter(el => el.id !== id))
    }

  }
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
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {todos.map(({ id, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <div><input onChange={(e) => handleChange(e, id)} checked={completedData.some(el => el?.id === id)} type="checkbox" />{" "}{title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const todos = await fetchTodos()
  return {
    props: {
      todos
    }
  }
}
