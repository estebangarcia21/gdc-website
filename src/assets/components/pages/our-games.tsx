import React from 'react';
import GameSection from '../objects/GameSection';

interface SidebarProps {
    yearRange: string;
    projectNames?: string[];
}

const SidebarSection: React.FC<SidebarProps> = (props) => {
    return (
        <div>
            <div>
                <p>{props.yearRange}</p>

                <ul
                    className='text'
                    style={{
                        color: 'white',
                    }}
                >
                    <li>Y</li>
                </ul>
            </div>
        </div>
    );
};

const Ourgamespage: React.FC = () => {
    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    backgroundImage:
                        'linear-gradient(45deg, #5b49ff 25%, #28f5e4)',
                    zIndex: 1,
                    width: '250px',
                    height: '100%',
                }}
            >
                <p
                    className='subtitle-text'
                    style={{
                        marginTop: '20px',
                    }}
                >
                    Timeline
                </p>

                <SidebarSection yearRange='2020-2021' />
            </div>

            <GameSection
                gameTitle='Spooksville'
                gameDescription='Our first game!'
            />
        </div>
    );
};

export default Ourgamespage;
