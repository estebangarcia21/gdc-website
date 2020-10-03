import React from 'react';

enum BarPosition {
    LEFT,
    RIGHT,
}

interface SectionProps {
    title: string;
    barPosition: BarPosition;
}

const Section: React.FC<SectionProps> = (props) => {
    const position =
        props.barPosition === BarPosition.LEFT ? '--left' : '--right';

    return (
        <div>
            <div className='page-content'>
                <div className='information-section-header'>{props.title}</div>

                <div className={'horizontal-bar' + position} />

                <p className={'text' + position}>{props.children}</p>
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

            <Section
                title='BUILDING OUR COMMUNITY'
                barPosition={BarPosition.LEFT}
            >
                At Game Development Club, we are always activley looking for new
                artists, programmers, animators, musicians, and writers to join
                our community. From years of experience to complete beginner,
                anyone may join Game Development Club at any time, regardless of
                experience.
            </Section>

            <Section
                title='LEARN EVERYTHING YOU NEED TO KNOW'
                barPosition={BarPosition.RIGHT}
            >
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
