import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/objects/Header";
import Footer from "./components/objects/Footer";

import Homepage from "./components/pages/home";
import Todopage from "./components/pages/to-do";

import "./assets/App.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />

                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/to-do" component={Todopage} />

                    <Footer />
                </Router>
            </div>
        )
    }
}

export default App;