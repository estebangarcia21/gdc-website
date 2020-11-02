import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/App.css';
import Home from './pages/Home';
import OurGames from './pages/OurGames';
import Resources from './pages/Resources';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/our-games' component={OurGames} />
          <Route path='/resources' component={Resources} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
