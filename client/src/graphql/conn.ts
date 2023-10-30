import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = 
  import.meta.env.MODE === 'production' 
    ? `https://${import.meta.env.VERCEL_URL}` : import.meta.env.VITE_GRAPHQL_URI

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
})

export default client
