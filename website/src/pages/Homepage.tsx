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
            <p className='text--gray info-card--text center-text'>
                {props.children}
            </p>
        </div>
    );
};

const Homepage: React.FC = () => {
    const [loaded, setLoaded] = useState({
        cards: false,
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

                <div id='home-banner-right-panel'>
                    <img
                        className='box-shadow'
                        src={concept_art}
                        width='80%'
                        height='150%'
                        alt='Images from our games'
                    />
                </div>
            </div>

            <animated.div
                style={useSpring({
                    config: {
                        duration: 500,
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
                <h1 className='title--white'>
                    Why join Game Development Club?
                </h1>
            </div>

            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    isVisible = loaded.cards ? true : isVisible;

                    return (
                        <Spring
                            config={{
                                duration: 500,
                                easing: easings.easeBack,
                            }}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? 'translateY(0)'
                                    : 'translateY(50px)',
                            }}
                            onRest={() => {
                                setLoaded({
                                    ...loaded,
                                    cards: true,
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
