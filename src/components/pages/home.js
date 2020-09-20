import React from "react";

import Card from "./../objects/Card";

class Homepage extends React.Component {
    render() {
        const cardOneText = "Sample text in here!!!!!!!!!!!";

        return (
            <div>
                <div className="section section-one">
                    <div className="title-text">Game Development Club</div>
                    <div className="subtitle-text">Making games at Franklin High School since 2020</div>
                </div>

                <div className="section">
                    <Card title="Artists" x="171px" y="150px" text={cardOneText}/>
                    <Card title="Musicians" x="471px" y="350px" text={cardOneText} />
                    <Card title="Programmers" x="771px" y="150px" text={cardOneText} />
                    <Card title="Animators" x="1071px" y="350px" text={cardOneText} />
                    <Card title="Writers" x="1371px" y="150px" text={cardOneText} />
                </div>
            </div>
        );
    }
}

export default Homepage;