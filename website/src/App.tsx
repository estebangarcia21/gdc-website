import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/App.css';
import Home from './pages/Home';
import OurGames from './pages/OurGames';
import Resources from './pages/Resources';
import { directoryReducer } from './stores/directory/reducers';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const store = createStore(directoryReducer);

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/our-games' component={OurGames} />
            <Route path='/resources' component={Resources} />
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
