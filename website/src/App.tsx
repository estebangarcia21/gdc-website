import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import './assets/scss/App.css';
import Home from './pages/Home';
import OurGames from './pages/OurGames';
import Resources from './pages/Resources';
import { rootReducer } from '../src/stores/index';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const store = createStore(rootReducer);

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
