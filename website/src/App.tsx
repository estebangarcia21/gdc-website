import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './assets/components/pages/home';
import Joingdcpage from './assets/components/pages/join-gdc';
import Ourgamespage from './assets/components/pages/our-games';
import Todopage from './assets/components/pages/to-do';
import './assets/scss/App.scss';

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
