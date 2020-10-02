import React from 'react';
import discordLogo from '../assets/images/discord.png';
import classroomLogo from '../assets/images/gc_logo.png';

const Joingdcpage: React.FC = () => {
    return (
        <div>
            <p className='title-text'>Join Game Development Club</p>

            <div className='half-page'>
                <div className='join-gdc-background horizontal-center'>
                    <img
                        className='horizontal-center'
                        src={discordLogo}
                        alt='Discord Logo'
                        width='45%'
                        height='auto'
                    />

                    <p className='subtitle-text--black horizontal-center'>
                        Join Via Discord
                    </p>

                    <a
                        href='https://discord.gg/x9YRUfx'
                        className='header-button-join-now--large horizontal-center'
                    >
                        Join Discord
                    </a>
                </div>
            </div>

            <div className='half-page'>
                <div className='join-gdc-background horizontal-center'>
                    <img
                        className='horizontal-center'
                        src={classroomLogo}
                        alt='Discord Logo'
                        width='200px'
                        height='200px'
                    />

                    <p className='subtitle-text--black horizontal-center'>
                        Join Via Classroom
                    </p>

                    <a
                        href='https://classroom.google.com/c/MTc4NjQ4NjE4MzY2?cjc=glgda6k'
                        className='header-button-join-now--large horizontal-center'
                    >
                        Join Classroom
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Joingdcpage;
