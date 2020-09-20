import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card text" style={{ left: this.props.x, top: this.props.y }}>
                <div style={{ width: "100%", height: "50px", backgroundImage: "linear-gradient(45deg, #ffa9a9 20%, #ffe81c)" }}>
                    <p style={{ fontSize: "26px", color: "white", padding: "13px", marginTop: "0px" }}>{this.props.title}</p>
                </div>

                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Card;