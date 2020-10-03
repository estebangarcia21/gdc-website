import React from 'react';
import { Link } from 'react-router-dom';

interface InfoSectionProps {
    title: string;
}

const InfoSection: React.FC<InfoSectionProps> = (props) => {
    return (
        <div>
            <div className='page-content'>
                <div className='information-section-header'>{props.title}</div>

                <div className='horizontal-bar' />

                <p className='text'>{props.children}</p>
            </div>
        </div>
    );
};

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

            <InfoSection title='BUILDING OUR COMMUNITY'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ad
                consequatur porro ipsam. Vitae provident dolore iste, corrupti
                magnam possimus id voluptas quisquam odio distinctio odit
                accusantium exercitationem ipsam accusamus?
            </InfoSection>

            <InfoSection title='SAMPLE TEXT'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quam officia, illum iure dolorum explicabo doloremque provident
                ipsam earum voluptas dignissimos at perferendis ipsa sapiente
                magnam, sit necessitatibus eligendi delectus.
            </InfoSection>

            <div id='pre-footer'>
                <p className='subtitle-text horizontal-text-center'>
                    JOIN GAME DEVELOPMENT CLUB
                </p>

                <div className='horizontal-bar' />

                <p className='text'>Join Game Development Club today!</p>

                <Link
                    to='join-gdc'
                    className='header-button-join-now horizontal-center'
                >
                    Join GDC
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
