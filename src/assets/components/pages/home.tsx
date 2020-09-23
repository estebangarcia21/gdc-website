import React from "react";

import FloatingDiamond from "./../objects/FloatingDiamond";

const Homepage: React.FC = () => {
    // const artistsDescription = "Artists create amazing art!";
    // const musiciansDescription = "Musicians create amazing music!";
    // const programmersDescription = "Programmers create amazing code!";
    // const animatorsDescription = "Animators create amazing animations!";
    // const writersDescription = "Writers create amazing stories!";

    return (
        <div>
            <div id="title-background">
                <div className="typing-effect title-text">Game Development Club</div>
                <div className="subtitle-text fade-in">Making games at Franklin High School since 2020</div>

                <FloatingDiamond x={ 20 } y={ 70 } />
            </div>

            <div className="text" style={{ marginTop: "25px", marginBottom: "20px", fontSize: "64px" }}>« Who are we? »</div>
        </div>
    );
}

export default Homepage;