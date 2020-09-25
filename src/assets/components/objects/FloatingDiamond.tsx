import React from 'react';

interface Props {
    x: number;
    y?: number;
}

const FloatingDiamond: React.FC<Props> = (props) => {
    const x = 5 + props.x;

    const style = {
        left: x,
        bottom: props.y,
    };

    return <div className='floating-diamond' style={style}></div>;
};

export default FloatingDiamond;
