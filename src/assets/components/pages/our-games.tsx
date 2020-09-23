import React from 'react';
import GameSection from '../objects/GameSection';

const Ourgamespage: React.FC = () => {
    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    backgroundColor: 'black',
                    zIndex: 1,
                    width: '250px',
                    height: '100%',
                }}
            ></div>

            <GameSection
                gameTitle='Spooksville'
                gameDescription='Our first game!'
            />
        </div>
    );
};

export default Ourgamespage;
