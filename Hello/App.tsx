import React from 'react';
import { View } from 'react-native';
import GetApi from './components/GetApi';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Auth from './Auth';

const client = new ApolloClient({
  uri: 'http://192.168.0.196:4000/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
       <Auth />
    {/* <GetApi/> */}
    </ApolloProvider>
  );
}

export default App;
