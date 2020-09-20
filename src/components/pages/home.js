import React from "react";

import Card from "./../objects/Card";

class Homepage extends React.Component {
    render() {
        const cardOneText = "Some constant text value!!!";

        return (
            <div>
                <div className="section section-one">
                    <div className="title-text">Game Development Club</div>
                    <div className="subtitle-text">Making games at Franklin High School since 2020</div>
                </div>

                <div className="section">
                    <Card title="Artists" x="150px" y="150px" text={cardOneText}/>
                    <Card title="Musicians" x="450px" y="350px" text={cardOneText} />
                    <Card title="Programmers" x="750px" y="150px" text={cardOneText} />
                    <Card title="Animators" x="1050px" y="350px" text={cardOneText} />
                    <Card title="Writers" x="1350px" y="150px" text={cardOneText} />
                </div>
            </div>
        );
    }
}

export default Homepage;