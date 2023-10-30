import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = 
  import.meta.env.MODE === 'production' 
    ? `https://${import.meta.env.VITE_VERCEL_ENV}` : import.meta.env.VITE_GRAPHQL_URI

const client = new ApolloClient({
  uri: `${uri}/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
