import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
    return (
        <div>
            <div id='title-background'>
                <div className='vertical-center'>
                    <div className='title-text fade-in'>
                        Game Development Club
                    </div>
                    <div className='subtitle-text--centered fade-in white'>
                        The Community of Communities at Franklin High School
                    </div>
                </div>
            </div>

            <div className='page-content'>
                <div className='information-section-header'>
                    Building our Community
                </div>

                <div className='horizontal-bar' />

                <p className='text'>
                    Game Development Club is always looking for artists,
                    programmers, writers, musicians, and animators to make up
                    our community and team at Game Development Club.
                </p>
            </div>

            <p className='subtitle-text--black subtitle-text--centered'>
                Join Game Development Club
            </p>

            <Link
                to='join-gdc'
                className='header-button-join-now--large horizontal-center'
            >
                Join GDC
            </Link>
        </div>
    );
};

export default Homepage;
