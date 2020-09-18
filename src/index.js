import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar.js";
import PageSection from "./components/PageSection.js";

import "./index.css";

function App() {
    return (
        <>
            <Navbar />
            <PageSection styleName="section-one" contents={
            (
                <>
                    <div className="main-text-format">Game Development Club</div>
                    <div className="text">Making games at Franklin High School since 2020</div>
                </>
            )
            }/>
            <PageSection />
            <PageSection />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
