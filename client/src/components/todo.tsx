import { ChangeEventHandler, type FC } from 'react'
import { useMutation, gql } from '@apollo/client'

import { TodoType } from '../graphql/type'
import { todoList } from '../App'

const update = gql`
  mutation update($id: ID!, $completed: Boolean) {
    update(id: $id, completed: $completed) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`

const deleteItem = gql`
  mutation delete($id: ID!) {
    delete(id: $id) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`

type Props = TodoType

export const Todo: FC<Props> = ({ title, completed, id }) => {
  const [updateFunc] = useMutation<{
    todoList: TodoType[]
  }>(update)

  const [deleteFunc] = useMutation(deleteItem, {
    refetchQueries: [todoList, 'todoList'],
  })

  const onChange: ChangeEventHandler = (e) => {
    e.stopPropagation()
    updateFunc({
      variables: {
        id,
        completed: !completed,
      },
    })
  }

  const onDelete = async () => {
    await deleteFunc({
      variables: {
        id,
      },
    })
  }

  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={completed} onChange={onChange} /> {title}
      <button onClick={onDelete} className="text-rose-500">
        [x]
      </button>
    </div>
  )
}
