import { useState } from "react";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { fetchTodoById, getTodosIds } from "../../lib/todos";

export async function getStaticProps({ params }) {
    const todo = await fetchTodoById(params.id);
    return {
        props: {
            todo
        }
    }
}

export default function Post({ todo }) {
    const [isDone, setDone] = useState(todo.completed)
    return (
        <Layout>
            <input
                onChange={(e) => setDone(e.target.checked)}
                type="checkbox"
                checked={isDone} />
            {" "}
            <span>{todo.title}</span>
            <p>{todo.id}</p>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//         paths,
//         fallback: false
//     }
// }


export async function getStaticPaths() {
    const paths = await getTodosIds()
    return {
        paths,
        fallback: false
    }
}