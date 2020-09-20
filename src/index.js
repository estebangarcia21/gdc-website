import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/objects/Header";

import Homepage from "./components/pages/home"

import "./assets/standardstyles.css";

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Router>

                    <Header />

                    <Route exact path ="/" component={Homepage} />
                    <Route exact path="/" component={Homepage} />

                </Router>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
