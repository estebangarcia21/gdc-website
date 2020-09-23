import React from 'react';

interface Props {
    gameTitle: string;
    gameDescription: string;
    builds?: string[];
}

const GameSection: React.FC<Props> = (props) => {
    return (
        <div className='card'>
            <div
                style={{
                    width: '200px',
                    height: '65px',
                    position: 'relative',
                    backgroundColor: 'black',
                    float: 'left',
                }}
            >
                <div
                    className='subtitle-text'
                    style={{
                        position: 'relative',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        fontSize: '1.4vw',
                    }}
                >
                    {props.gameTitle}
                </div>
            </div>
        </div>
    );
};

export default GameSection;
