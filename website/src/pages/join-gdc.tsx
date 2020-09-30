import React from 'react';
import discordLogo from '../assets/components/images/discord.png';
import remindLogo from '../assets/components/images/remind.png';

const Joingdcpage: React.FC = () => {
    return (
        <div>
            <p className='title-text'>Join Game Development Club</p>

            <div className='half-page'>
                <img
                    className='horizontal-center'
                    src={discordLogo}
                    alt='Discord Logo'
                    width='200px'
                    height='200px'
                />

                <p className='subtitle-text horizontal-center'>
                    Join Via Discord
                </p>

                <p className='join-gdc-link'>https://discord.gg/x9YRUfx</p>
            </div>

            <div className='half-page'>
                <img
                    className='horizontal-center'
                    src={remindLogo}
                    alt='Discord Logo'
                    width='200px'
                    height='200px'
                />

                <p className='subtitle-text horizontal-center'>
                    Join Via Remind
                </p>

                <p className='join-gdc-link'>https://discord.gg/x9YRUfx</p>
            </div>
        </div>
    );
};

export default Joingdcpage;
