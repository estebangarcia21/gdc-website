import React from "react";

interface Props {
    title: string;
    text: string;
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className="card text">
            <div style={{ height: "50px", backgroundImage: "linear-gradient(45deg, #ffa9a9 20%, #ffe81c)" }}>
                <p style={{ fontSize: "26px", color: "white", padding: "13px", marginTop: "0px" }}>{props.title}</p>
            </div>

            <p style={{ fontSize: "20px" }}>{props.text}</p>
        </div>
    );
}

export default Card;