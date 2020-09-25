import React from 'react';
import { Game as Props } from '../pages/game-data';

const GameSection: React.FC<Props> = (props) => {
    const builds = props.builds?.map((build) => (
        <div>
            <p className='build'>
                {build.operatingSystem}
                <br />
                {build.version}
                <br />
                {build.downloadLink}
            </p>
        </div>
    ));

    return (
        <div className='card'>
            <div
                style={{
                    width: '100%',
                    height: '65px',
                }}
            >
                <div className='corner-box'>
                    <div
                        className='text'
                        style={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translate(0%, -50%)',
                            fontSize: '30px',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        {props.gameTitle}
                    </div>
                </div>
            </div>

            <p className='text' style={{ textAlign: 'center' }}>
                {props.gameDescription}
            </p>

            {builds}
        </div>
    );
};

export default GameSection;
