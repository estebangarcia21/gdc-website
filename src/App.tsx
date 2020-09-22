import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./assets/components/objects/Header";
import Footer from "./assets/components/objects/Footer";

import Homepage from "./assets/components/pages/home";
import Todopage from "./assets/components/pages/to-do";

import "./assets/App.css";

const App: React.FC = () => {
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

export default App;