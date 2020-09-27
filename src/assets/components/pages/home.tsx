import React from 'react';

import Header from '../objects/Header';
import concept_art from '../images/concept_art.png';
import { Link } from 'react-router-dom';

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
                        className='horizontal-center gdc-artist-img box-shadow fade-in'
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
                <div className='info-text--left'>
                    Be part of a growing team of developers, artists, musicians,
                    writers, and animators. Learn and collaborate with members
                    to create a quality game.
                    <span className='pop-text'>
                        &nbsp;No previous experience needed.
                    </span>
                </div>

                <div className='info-text--right'>
                    Learn all the skills you need to become a successful
                    contributor to our projects at Game Development Club.
                    <span className='pop-text'>
                        &nbsp;No paid applications or licenses
                    </span>
                    &nbsp;are needed to be a successful person in the game
                    development industry.
                </div>

                <div className='info-text--left'>
                    Display a sense of passion at GDC with our amazing members
                    and teams, we have a great workflow or something im just
                    writing placeholder text so i can see how the word wrapping
                    behaves with this new scss.
                </div>
            </div>

            <div className='subtitle-text'>
                Join Game Development Club Today
            </div>
            <div className='text horizontal-text-center'>
                Join today and become part of a team that you can enjoy.
            </div>

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
