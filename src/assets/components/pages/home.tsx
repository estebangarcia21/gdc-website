import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../objects/Header';
import concept_art from '../images/concept_art.png';

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />

            <div id='title-background'>
                <div className='vertical-center'>
                    <div className='title-text fade-in'>
                        Game Development Club
                    </div>
                    <div className='subtitle-text fade-in white'>
                        Making games at Franklin High School since 2020
                    </div>
                    <img
                        src={concept_art}
                        width='40%'
                        height='40%'
                        className='horizontal-center gdc-artist-img box-shadow'
                        alt='Art Sample'
                    />
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
                    <div>
                        <div className='left-text'>
                            Be part of a growing team of developers, artists,
                            musicians, writers, and animators. Learn and
                            collaborate with members to create a quality game.
                            <span className='pop-text'>
                                &nbsp;No previous experience needed.
                            </span>
                        </div>
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
