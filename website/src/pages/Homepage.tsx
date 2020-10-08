import * as easings from 'd3-ease';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
import concept_art from '../assets/images/concept_art.png';
import animation_svg from '../assets/svgs/animation-motion.svg';
import art_svg from '../assets/svgs/brush-paintbrush.svg';
import programming_svg from '../assets/svgs/code.svg';
import music_svg from '../assets/svgs/music.svg';
import writers_svg from '../assets/svgs/pencil-draw.svg';

interface TeamCardProps {
    title: string;
    icon: string;
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
    return (
        <div className='info-card'>
            <img
                className='horizontal-center'
                src={props.icon}
                width='35px'
                height='35px'
                alt='Icon'
            />
            <p className='info-card--title'>{props.title}</p>
            <p
                className='text info-card--text center-text'
                style={{ color: '#414141' }}
            >
                {props.children}
            </p>
        </div>
    );
};

const Homepage: React.FC = () => {
    const [loaded, setLoaded] = useState({
        joinTeamCards: false,
    });

    return (
        <div>
            <div id='home-banner'>
                <div className='vertical-center'>
                    <div id='home-banner-left-panel'>
                        <h1 className='title'>Game Development Club</h1>
                        <h2 className='subtitle'>
                            The Community of Communities
                        </h2>
                    </div>
                </div>

                <div>
                    <img
                        id='header-image'
                        className='box-shadow'
                        src={concept_art}
                        alt='Images from our games'
                    />
                </div>
            </div>

            <animated.div
                style={useSpring({
                    config: {
                        delay: 250,
                        duration: 1000,
                        easing: easings.easeBack,
                    },
                    opacity: 1,
                    from: { opacity: 0 },
                })}
            >
                <p className='title center-text'>
                    What is Game Development Club?
                </p>

                <p id='home-description' className='text center-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit soluta, rem hic voluptatem accusamus tempora sapiente
                    molestiae at nesciunt dolore totam non, et, culpa
                    consequuntur a ea voluptates eum quibusdam? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quam rerum
                    sapiente culpa similique repellendus error fugiat itaque,
                    fugit dolorum mollitia distinctio odio, minima alias, quae
                    repudiandae odit suscipit cupiditate eum?
                </p>
            </animated.div>

            <div id='why-join-section'>
                <div id='why-join-section--left'>
                    <h1
                        className='title--white vertical-center'
                        style={{
                            fontSize: '42px',
                            textAlign: 'center',
                        }}
                    >
                        Why join Game Development Club?
                    </h1>
                </div>

                <div id='why-join-section--right'>
                    <div
                        id='why-join-section--list-text'
                        className='vertical-center'
                    >
                        <p>Meet new people who share your interests!</p>
                        <br />
                        <p>Learn game development skills!</p>
                        <br />
                        <p>Have fun with frequent celebrations!</p>
                        <br />
                        <p>No previous experience needed!</p>
                        <br />
                        <p>Become better in your field!</p>
                        <br />
                    </div>
                </div>
            </div>

            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    isVisible = loaded.joinTeamCards ? true : isVisible;

                    return (
                        <Spring
                            config={{
                                duration: 500,
                                easing: easings.easeCubic,
                            }}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? 'translateY(0px)'
                                    : 'translateY(50px)',
                            }}
                            onStart={() => {
                                if (!isVisible) return;

                                setLoaded({
                                    ...loaded,
                                    joinTeamCards: true,
                                });
                            }}
                        >
                            {(props) => (
                                <div style={{ ...props }}>
                                    <p className='title center-text'>
                                        Join a Team
                                    </p>

                                    <div id='info-cards'>
                                        <TeamCard
                                            title='Programmers'
                                            icon={programming_svg}
                                        >
                                            Tie the project together!
                                            Programmers connect all assets and
                                            bring the game to life through Unity
                                            and C#.
                                        </TeamCard>
                                        <TeamCard
                                            title='Artists'
                                            icon={art_svg}
                                        >
                                            Work together with other artists to
                                            create amazing 2D visuals for our
                                            games. Any art style is welcome!
                                        </TeamCard>
                                        <TeamCard
                                            title='Animators'
                                            icon={animation_svg}
                                        >
                                            Bring the game to life! Work closely
                                            with the art team to make fluid,
                                            responsive, and engaging animations.
                                        </TeamCard>
                                        <TeamCard
                                            title='Writers'
                                            icon={writers_svg}
                                        >
                                            Layout layout the story of our
                                            games! Communicate with club members
                                            to create amazing stories!
                                        </TeamCard>
                                        <TeamCard
                                            title='Musicians'
                                            icon={music_svg}
                                        >
                                            Produce inspiring music that
                                            captures the feeling and emotion of
                                            the game environment.
                                        </TeamCard>
                                    </div>
                                </div>
                            )}
                        </Spring>
                    );
                }}
            </VisibilitySensor>
        </div>
    );
};

export default Homepage;
