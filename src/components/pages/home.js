import React from "react";

import Card from "./../objects/Card";

class Homepage extends React.Component {
    render() {
        const artistsDescription = "Join Game Development Club to get to work with other artists or something";
        const musiciansDescription = "";
        const programmersDescription = "Sample text in here!!!!!!!!!!!";
        const animatorsDescription = "";
        const writersDescription = "";

        return (
            <div>
                <div className="section section-one">
                    <div className="typing-effect title-text">Game Development Club</div>
                    <div className="subtitle-text fade-in">Making games at Franklin High School since 2020</div>
                </div>

                <div className="text" style={{ marginTop: "35px", fontSize: "64px" }}>« How you can help »</div>

                <div className="section section-two">
                    <Card title="Artists" text={artistsDescription} />
                    <Card title="Musicians" text={musiciansDescription} />
                    <Card title="Programmers" text={programmersDescription} />
                    <Card title="Animators" text={animatorsDescription} />
                    <Card title="Writers" text={writersDescription} />
                </div>
            </div>
        );
    }
}

export default Homepage;