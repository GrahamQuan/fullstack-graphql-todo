import 'dotenv/config'

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import gql from 'graphql-tag'
import { readFileSync } from 'fs'
import cors from 'cors'
import express from 'express'

import resolvers from './graphql/resolvers.js'

const PORT = Number(process.env.PORT || '3000')
const app = express()

const typeDefs = gql(
  readFileSync(new URL('./graphql/schema.graphql', import.meta.url), {
    encoding: 'utf-8',
  })
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

await server.start()
app.use(
  '/api/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server)
)

app.get('/api/status', (req, res) => {
  return res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
