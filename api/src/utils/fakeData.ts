import { faker } from '@faker-js/faker'
import prisma from '../libs/prismadb'

async function GenFakeData() {
  for (let i = 0; i < 3; i++) {
    await prisma.todo.create({
      data: {
        title: faker.lorem.words(),
      },
    })
  }
}
