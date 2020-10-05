import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/App.css';
import Homepage from './pages/Homepage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Ourgamespage from './pages/Ourgamespage';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/our-games' component={Ourgamespage} />
            </Router>
        </ApolloProvider>
    );
};

export default App;
