import { black } from "color-name";
import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card text" style={{ left: this.props.x, top: this.props.y, marginTop: "0px auto" }}>
                <div style={{ width: "100%", height: "50px", backgroundColor: "black" }}>
                    <p style={{ fontSize: "26px", color: "white" }}>{this.props.title}</p>
                </div>

                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Card;