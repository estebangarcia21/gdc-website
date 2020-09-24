import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './assets/components/pages/home';
import Todopage from './assets/components/pages/to-do';
import Ourgamespage from './assets/components/pages/our-games';

import './assets/scss/App.css';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/to-do' component={Todopage} />
                <Route exact path='/our-games' component={Ourgamespage} />
            </Router>
        </div>
    );
};

export default App;
