import React from 'react';

const Joingdcpage: React.FC = () => {
    return (
        <div className='fade-in'>
            <div
                className='box-shadow'
                style={{
                    position: 'relative',
                    marginTop: '50vh',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '75%',
                    height: '75vh',
                    backgroundColor: 'white',
                }}
            >
                <p
                    className='subtitle-text'
                    style={{
                        top: '20px',
                    }}
                >
                    Join Game Development Club
                </p>

                <div
                    className='horizontal-text-center subtitle-text'
                    style={{
                        width: '50%',
                        position: 'relative',
                        float: 'left',
                    }}
                >
                    Discord
                </div>

                <div
                    className='horizontal-text-center subtitle-text'
                    style={{
                        width: '50%',
                        position: 'relative',
                        float: 'left',
                    }}
                >
                    Remind
                </div>
            </div>
        </div>
    );
};

export default Joingdcpage;
