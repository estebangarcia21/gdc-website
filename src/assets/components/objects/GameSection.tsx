import React from "react";

interface Props {
    gameTitle: string;
    gameDescription: string;
    builds?: string[];
}

const GameSection: React.FC<Props> = (props) => {
    return (
        <div className="card" style={{}}>
            <div
                style={{
                    width: "200px",
                    height: "100px",
                    top: 0,
                    left: 0,
                    position: "relative",
                    backgroundColor: "red",
                }}
            >
                {props.gameTitle}
            </div>
        </div>
    );
};

export default GameSection;
