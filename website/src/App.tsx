import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/App.css';
import Homepage from './pages/home';
import Joingdcpage from './pages/join-gdc';
import Ourgamespage from './pages/our-games';
import Todopage from './pages/to-do';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/to-do' component={Todopage} />
                <Route exact path='/our-games' component={Ourgamespage} />
                <Route exact path='/join-gdc' component={Joingdcpage} />
            </Router>
        </div>
    );
};

export default App;
