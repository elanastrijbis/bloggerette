import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-southeast-2.hygraph.com/v2/claup9j8924a801um0l0s8ud9/master',
  cache: new InMemoryCache(),
});

export default client;
