// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import Test from './components/Test/Test';

const httpLink = createHttpLink({
  uri: `http://localhost:${process.env.GATEWAY_PORT || 5000}/graphql/`
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
});


export function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Test />
      </ApolloProvider>
    </div>
  );
}

export default App;
