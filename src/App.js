import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/objects/Header";

import Homepage from "./components/pages/home";
import Todopage from "./components/pages/to-do";

import "./assets/standardstyles.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <div id="spacing" />

                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/to-do" component={Todopage} />

                </Router>
            </div>
        )
    }
}

export default App;