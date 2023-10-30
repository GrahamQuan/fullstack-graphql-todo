import { useMutation, gql } from '@apollo/client'
import { FormEventHandler, useState } from 'react'
import { todoList } from '../App'

const add = gql`
  mutation add($title: String) {
    add(title: $title) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`

const AddTodo = () => {
  const [value, setValue] = useState('')
  const [addFunc] = useMutation(add, {
    refetchQueries: [todoList, 'todoList'],
  })

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    await addFunc({
      variables: {
        title: value,
      },
    })
    setValue('')
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-1">
      <input
        type="text"
        className="border rounded py-1 px-2 w-64"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded">submit</button>
    </form>
  )
}

export default AddTodo
