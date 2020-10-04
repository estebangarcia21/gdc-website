import React from 'react';

interface SectionProps {
    title: string;
}

const Section: React.FC<SectionProps> = (props) => {
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

            <Section title='Building Our Community'>
                At Game Development Club, we are always activley looking for new
                artists, programmers, animators, musicians, and writers to join
                our community. From years of experience to complete beginner,
                anyone may join Game Development Club at any time, regardless of
                experience.
            </Section>
            <Section title='LEARN EVERYTHING YOU NEED TO KNOW'>
                Game Development Club offers an extensive amount of resources
                and lessons to those who are interested in becomming better at
                their craft. These resources give you the knowledge necessary to
                become a succesful and contributing member at Game Development
                Club.
            </Section>
            {/* 
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
            </div> */}
        </div>
    );
};

export default Homepage;
