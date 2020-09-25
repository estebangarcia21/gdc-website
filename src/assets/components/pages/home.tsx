import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../objects/header';

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
                    marginTop: '75px',
                    textAlign: 'center',
                    fontSize: '64px',
                }}
            >
                Collaborate. Create. Learn.
            </div>

            <div id='page-content'>
                <div className='text-section'>
                    <div className='left-text'>
                        Be part of a growing team of developers, artists,
                        musicians, writers, and animators. Learn from others and
                        collaborate with members to create a quality game.
                    </div>

                    <Link to='/' className='button'>
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
