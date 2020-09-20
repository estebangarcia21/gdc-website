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

                <div className="section">
                    <Card title="Artists" x="171px" y="150px" text={artistsDescription}/>
                    <Card title="Musicians" x="471px" y="350px" text={musiciansDescription} />
                    <Card title="Programmers" x="771px" y="150px" text={programmersDescription} />
                    <Card title="Animators" x="1071px" y="350px" text={animatorsDescription} />
                    <Card title="Writers" x="1371px" y="150px" text={writersDescription} />
                </div>
            </div>
        );
    }
}

export default Homepage;