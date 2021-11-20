export async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_page=1");
    const data = response.json()
    return data
}

export const fetchTodoById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await response.json()
    return data
}
export const getTodosIds = async () => {
    const todos = await fetchTodos();
    return todos.map(todo => ({
        params: {
            id: todo.id.toString()
        }
    }))
}