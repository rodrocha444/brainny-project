import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client/react'

import { defaultTheme } from './styles/defaultTheme'
import { client } from './api/config'
import { Router } from './Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
)
