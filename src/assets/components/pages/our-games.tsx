import React from 'react';
import GameSection from '../objects/GameSection';

interface SidebarProps {
    yearRange: string;
    projectNames?: string[];
}

const SidebarSection: React.FC<SidebarProps> = (props) => {
    const jsxElements = props.projectNames?.map((element) => (
        <li style={{ fontSize: '18px' }}>{element}</li>
    ));

    return (
        <div>
            <div>
                <p className='subtitle-text' style={{ fontSize: '26px' }}>
                    {props.yearRange}
                </p>

                <ul
                    className='text'
                    style={{
                        color: 'white',
                    }}
                >
                    {jsxElements}
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
                        marginBottom: '5px',
                    }}
                >
                    Timeline
                </p>

                <SidebarSection
                    yearRange='2020-2021'
                    projectNames={['Spooksvile', 'GDC', 'E']}
                />
                <SidebarSection
                    yearRange='2021-2020'
                    projectNames={['Our first proj', 'example!']}
                />
            </div>

            <GameSection
                gameTitle='Spooksville'
                gameDescription='Our first game!'
            />
        </div>
    );
};

export default Ourgamespage;
