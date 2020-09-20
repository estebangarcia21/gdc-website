import React from "react";

import Card from "./../objects/Card";

class Homepage extends React.Component {
    render() {
        const cardOneText = "Musicians are in charge of creating\
        great music that is great xD";

        return (
            <div>
                <div className="section section-one">
                    <div className="title-text">Game Development Club</div>
                    <div className="subtitle-text">Making games at Franklin High School since 2020</div>
                </div>

                <div className="section">
                    <Card title="Musicians" x="200px" y="500px" text={cardOneText}/>
                </div>
            </div>
        );
    }
}

export default Homepage;