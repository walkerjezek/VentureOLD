import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Test from './pages/Test';
import Map from './pages/Map';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} /> //made need to switch 'Login' to 'Home'
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/map" 
              element={<Map />}
            />
            {/* <Route 
              path="/matchup/:id" 
              element={<Vote />}
            /> */}
            <Route 
              path="*"
              element={<NotFound />}
            />
          <Route 
          path="/landing"
          element={<Landing />}
          />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
