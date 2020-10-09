import * as easings from 'd3-ease';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
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

const Home: React.FC = () => {
    const [loaded, setLoaded] = useState({
        joinTeamCards: false,
    });

    return (
        <div>
            <div id='home-banner'>
                <div className='vertical-center'>
                    <div id='home-banner-left-panel'>
                        <h1 id='home-banner--title'>Game Development Club</h1>
                        <h2 className='subtitle'>
                            The Community of Communities
                        </h2>
                    </div>
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
                <div id='home-description'>
                    <p className='section-title'>
                        What is Game Development Club?
                    </p>

                    <p className='text center-text'>
                        Game Development Club is a club where artists,
                        programmers, animators, musicians, and writers work
                        together to create amazing games!
                        <br />
                        <br />
                        At Game Development Club, people can learn a
                    </p>
                </div>
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
                        id='why-join-section--list'
                        className='vertical-center'
                    >
                        <ul>
                            <li>Meet new people who share your interests</li>
                            <li>Become better at your craft</li>
                            <li>
                                Experience a collaborative working enviornment
                            </li>
                            <li>Learn Game Development</li>
                        </ul>
                    </div>
                </div>
            </div>

            <VisibilitySensor
                partialVisibility
                onChange={(isVisible) => {
                    if (!isVisible) return;

                    setLoaded({
                        ...loaded,
                        joinTeamCards: true,
                    });
                }}
            >
                <animated.div
                    style={useSpring({
                        config: {
                            duration: 500,
                            easing: easings.easeCubic,
                        },
                        opacity: loaded.joinTeamCards ? 1 : 0,
                        transform: loaded.joinTeamCards
                            ? 'translateY(0px)'
                            : 'translateY(50px)',
                    })}
                >
                    <p className='title center-text'>Join a Team</p>

                    <div id='info-cards'>
                        <TeamCard title='Programmers' icon={programming_svg}>
                            Tie the project together! Programmers connect all
                            assets and bring the game to life through Unity and
                            C#.
                        </TeamCard>
                        <TeamCard title='Artists' icon={art_svg}>
                            Work together with other artists to create amazing
                            2D visuals for our games. Any art style is welcome!
                        </TeamCard>
                        <TeamCard title='Animators' icon={animation_svg}>
                            Bring the game to life! Work closely with the art
                            team to make fluid, responsive, and engaging
                            animations.
                        </TeamCard>
                        <TeamCard title='Writers' icon={writers_svg}>
                            Layout layout the story of our games! Communicate
                            with club members to create amazing stories!
                        </TeamCard>
                        <TeamCard title='Musicians' icon={music_svg}>
                            Produce inspiring music that captures the feeling
                            and emotion of the game environment.
                        </TeamCard>
                    </div>
                </animated.div>
            </VisibilitySensor>
        </div>
    );
};

export default Home;
