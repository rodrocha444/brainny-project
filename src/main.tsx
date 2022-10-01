import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
)
