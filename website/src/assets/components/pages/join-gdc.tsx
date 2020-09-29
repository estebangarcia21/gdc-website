import React from 'react';
import discordLogo from '../images/discord.png';
import remindLogo from '../images/remind.png';

const Joingdcpage: React.FC = () => {
    const link: React.CSSProperties = {
        fontSize: '24px',
        fontFamily: '"Oxygen", monospace',
        textAlign: 'center',
        color: '#486ff0',
        marginTop: '100px',
    };

    const halfPage: React.CSSProperties = {
        float: 'left',
        width: '50%',
        height: '100%',
    };

    return (
        <div>
            {/* <p className='title-text'>Join Game Development Club</p> */}

            <div style={halfPage}>
                <div
                    style={{
                        transform: 'translate(0%, 50%)',
                    }}
                >
                    <img
                        className='horizontal-center'
                        src={discordLogo}
                        alt='Discord Logo'
                        width='200px'
                        height='200px'
                    />

                    <p
                        className='subtitle-text horizontal-center'
                        style={{
                            maxWidth: '20ch',
                            wordWrap: 'break-word',
                        }}
                    >
                        Join Via Discord
                    </p>

                    <p style={link}>https://discord.gg/x9YRUfx</p>
                </div>
            </div>

            <div style={halfPage}>
                <div
                    style={{
                        transform: 'translate(0%, 50%)',
                    }}
                >
                    <img
                        className='horizontal-center'
                        src={remindLogo}
                        alt='Discord Logo'
                        width='200px'
                        height='200px'
                    />
                    <p
                        className='subtitle-text horizontal-center'
                        style={{
                            maxWidth: '20ch',
                            wordWrap: 'break-word',
                        }}
                    >
                        Join Via Remind
                    </p>

                    <p style={link}>https://discord.gg/x9YRUfx</p>
                </div>
            </div>
        </div>
    );
};

export default Joingdcpage;
