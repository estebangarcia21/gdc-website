import React from "react";

interface Props {
    x: number;
    y?: number;
}

const FloatingDiamond: React.FC<Props> = (props) => {
    const x = 5 + props.x;

    return (
        <div className="floating-diamond" style={{ left: x , bottom: props.y }}></div>
    );
}

export default FloatingDiamond;