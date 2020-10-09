import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/App.css';
import Home from './pages/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import OurGames from './pages/OurGames';
import About from './pages/About';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/our-games' component={OurGames} />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
