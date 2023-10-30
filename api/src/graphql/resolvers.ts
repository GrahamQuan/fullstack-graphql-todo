import prisma from '../libs/prismadb'

const resolvers = {
  Query: {
    todoList: async () => {
      const todoList = await prisma.todo.findMany()
      return todoList
    },
    todo: async (_: any, { id }: { id: string }) => {
      const todo = await prisma.todo.findUnique({
        where: {
          id,
        },
      })
      return todo
    },
  },
  Mutation: {
    add: async (_: any, { title }: { title: string }) => {
      const todo = await prisma.todo.create({
        data: {
          title,
        },
      })
      return todo
    },
    update: async (
      _: any,
      { id, completed }: { id: string; completed: boolean }
    ) => {
      const todo = await prisma.todo.update({
        where: {
          id,
        },
        data: {
          completed,
        },
      })
      return todo
    },
    delete: async (_: any, { id }: { id: string }) => {
      const todo = await prisma.todo.delete({
        where: {
          id,
        },
      })
      return todo
    },
  },
}

export default resolvers
