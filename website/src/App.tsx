import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/App.css';
import Homepage from './pages/home';
import Ourgamespage from './pages/our-games';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/our-games' component={Ourgamespage} />
            </Router>
        </div>
    );
};

export default App;
