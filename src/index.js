import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar.js";
import PageSection from "./components/PageSection.js"


function App() {
    return (
        <html>
            <head>
                <title>GDC</title>

                <link rel="stylesheet" type="text/css" href="./index.css"></link>
            </head>
            <body>
                <div id="root">
                    <div id="section-one">
                        <div class="main-text-format">Game Development Club</div>
                        <div className="text">Making games at Franklin High School since 2020</div>
                    </div>

                    <div id="section-two"></div>
                </div>
            </body>
        </html>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <PageSection />
    </div>, document.getElementById("root"));


