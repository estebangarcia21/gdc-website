import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/App.css';
import Homepage from './pages/home';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Homepage} />
            </Router>
        </div>
    );
};

export default App;
