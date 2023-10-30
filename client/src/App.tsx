import { useQuery, gql } from '@apollo/client'

import { TodoType } from './graphql/type'
import { Todo } from './components/todo'
import AddTodo from './components/add-todo'

export const todoList = gql`
  query {
    todoList {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`

function App() {
  const { loading, error, data } = useQuery<{ todoList: TodoType[] }>(todoList)

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) return null

  return (
    <main className="p-4 w-full h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">Todo List</h1>
      <p className="mb-1">
        GraphQL + Typescript + React + Node + Prisma + MongoDB
      </p>
      <AddTodo />
      <div className="mt-1">
        {data.todoList.map((item) => {
          return <Todo {...item} key={item.id} />
        })}
      </div>
    </main>
  )
}

export default App
