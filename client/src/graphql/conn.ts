import { ApolloClient, InMemoryCache } from '@apollo/client'

// const uri = import.meta.env.VITE_GRAPHQL_URI

const client = new ApolloClient({
  // uri: `${uri}/api/graphql`,
  uri: `http://localhost:3000/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
