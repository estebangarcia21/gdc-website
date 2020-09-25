import React from 'react';

import Header from '../objects/Header';

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />
            <div id='title-background'>
                <div className='title-text fade-in' style={{ top: '37vh' }}>
                    Game Development Club
                </div>
                <div
                    className='subtitle-text fade-in white'
                    style={{ top: '40vh' }}
                >
                    Making games at Franklin High School since 2020
                </div>
            </div>
            <div
                className='text'
                style={{
                    marginTop: '25px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontSize: '64px',
                }}
            >
                Collaborate. Create. Learn.
            </div>

            <div className='left-text'>
                Be part of a growing team of developers, artists, musicians,
                writers, and animators. Learn from others who share your same
                interests, and bakceijdfeiejiejiejfiejfiejf
            </div>
        </div>
    );
};

export default Homepage;
