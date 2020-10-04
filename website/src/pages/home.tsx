import React from 'react';
import concept_art from '../assets/images/concept_art.png';

const Homepage: React.FC = () => {
    return (
        <div>
            <div id='home-banner'>
                <div className='vertical-center'>
                    <div id='home-banner-left-panel'>
                        <p className='title'>Game Development Club</p>
                        <p className='subtitle'>
                            The Community of Communities at Franklin
                        </p>
                    </div>
                </div>

                <div id='home-banner-right-panel'>
                    {/* Fade swap images */}
                    <img
                        className='box-shadow'
                        src={concept_art}
                        width='700px'
                        height='auto'
                        alt='Images from our games'
                    />
                </div>
            </div>

            <p className='title center-text'>What is Game Development Club?</p>
        </div>
    );
};

export default Homepage;
