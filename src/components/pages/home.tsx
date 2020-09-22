import React from "react";

import Card from "../objects/Card";

const Homepage: React.FC = () => {
    const artistsDescription = "Artists create amazing art!";
    const musiciansDescription = "Musicians create amazing music!";
    const programmersDescription = "Programmers create amazing code!";
    const animatorsDescription = "Animators create amazing animations!";
    const writersDescription = "Writers create amazing stories!";

    return (
        <div>
            <div className="section section-one">
                <div className="typing-effect title-text">
                Game Development Club
                </div>
                <div className="subtitle-text fade-in">
                Making games at Franklin High School since 2020
                </div>
            </div>

            <div className="text" style={{ marginTop: "35px", fontSize: "64px" }}>« Who are we? »</div>

            <div className="section section-two">
                <div style={{ position: "relative", marginLeft: "15%" }}>
                <Card title="Artists" text={artistsDescription} />
                <Card title="Musicians" text={musiciansDescription} />
                <Card title="Programmers" text={programmersDescription} />
                <Card title="Animators" text={animatorsDescription} />
                <Card title="Writers" text={writersDescription} />
                </div>
            </div>
        </div>
    );
}

export default Homepage;