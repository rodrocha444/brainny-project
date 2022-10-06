import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${localStorage.getItem('token')}` : "",
    }
  }
})

const link = from([
  authLink,
  new HttpLink({ uri: "http://test.frontend.api.brainny.cc/graphql" }),
])



export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});