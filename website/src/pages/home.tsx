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
                    <div className='subtitle-text fade-in white'>
                        Making Games at Franklin High School Since 2020
                    </div>
                </div>
            </div>

            <div className='page-content'>
                <div className='information-section-header'>
                    Everything you need to know in one place.
                </div>

                <Link
                    to='join-gdc'
                    className='header-button-join-now--large horizontal-center'
                >
                    Join GDC
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
