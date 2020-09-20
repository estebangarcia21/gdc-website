import { ReactComponent } from "*.svg";
import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {this.props.contents}
            </div>
        );
    }
}

export default Card;