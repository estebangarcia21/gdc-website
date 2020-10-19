import { motion } from 'framer-motion';
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../assets/components/Navbar';
import animationSvg from '../assets/svgs/animation-motion.svg';
import artSvg from '../assets/svgs/brush-paintbrush.svg';
import programmingSvg from '../assets/svgs/code.svg';
import musicSvg from '../assets/svgs/music.svg';
import writersSvg from '../assets/svgs/pencil-draw.svg';
import checkmark from '../assets/svgs/check-mark-line.svg';
import photoImage from '../assets/svgs/photo.svg';
import codeImage from '../assets/svgs/code-illustration.svg';
import musicImage from '../assets/svgs/music-illustration.svg';

interface CardProps {
    title: string;
    icon: string;
}

const Card: React.FC<CardProps> = props => {
    return (
        <div className='info-card'>
            <img src={props.icon} width='35px' height='35px' alt='Icon' />
            <p style={{ fontSize: '20px', margin: '10px' }}>{props.title}</p>
            <p style={{ fontSize: '14px', color: '#414141' }}>
                {props.children}
            </p>
        </div>
    );
};

const Checkmark: React.FC = () => {
    return <img src={checkmark} width='30' alt='Checkmark' />;
};

const Home: React.FC = () => {
    const [playedAnimations, setPlayedAnimations] = useState({
        joinTeamCards: false,
    });

    const fadeInTime = 0.45;

    return (
        <div>
            <Navbar />

            <div className='background-a'>
                <motion.div
                    id='home-banner'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: fadeInTime,
                    }}
                >
                    <h1>Game Development Club</h1>

                    <p>
                        A club where artists, programmers, animators, musicians,
                        and writers work together to create amazing games!
                    </p>
                </motion.div>

                <motion.img
                    src={photoImage}
                    width='500px'
                    className='side-image'
                    style={{
                        position: 'absolute',
                        right: '75px',
                        top: '75px',
                    }}
                    alt='Sun'
                    animate={{
                        top: '65px',
                    }}
                    transition={{
                        delay: 0.35,
                        duration: 1.5,
                        yoyo: Infinity,
                    }}
                />
                <motion.img
                    src={codeImage}
                    width='400px'
                    className='side-image'
                    style={{
                        position: 'absolute',
                        right: '50px',
                        top: '400px',
                    }}
                    alt='Code'
                    animate={{
                        top: '390px',
                    }}
                    transition={{
                        duration: 2,
                        yoyo: Infinity,
                    }}
                />
                <motion.img
                    src={musicImage}
                    width='200px'
                    className='side-image'
                    style={{
                        position: 'absolute',
                        right: '400px',
                        top: '310px',
                    }}
                    alt='Code'
                    animate={{
                        top: '300px',
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        yoyo: Infinity,
                    }}
                />

                <motion.div
                    id='home-banner'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: fadeInTime,
                        duration: fadeInTime,
                    }}
                >
                    <h3>What is Game Development Club?</h3>

                    <p>
                        At Game Development Club, we accept people of any
                        experience level. Whether you are a complete beginner or
                        experienced in your field, Game Development Club has a
                        place for you!
                        <br />
                        <br />
                        Game Development Club makes it easy for you to learn
                        what you need to know to become a successful contributor
                        to your team. Watch free lessons under our resources
                        section that are designated for your team and ask other
                        members of your team for help when you get stuck or have
                        a question!
                    </p>
                </motion.div>
            </div>

            <div className='background-b'>
                <motion.div
                    id='home-banner'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: fadeInTime * 2,
                        duration: fadeInTime,
                    }}
                >
                    <h3>Why join Game Development Club?</h3>

                    <p>
                        <Checkmark />
                        Meet people who share your interests
                        <br />
                        <br />
                        <Checkmark />
                        Grow in your field
                        <br />
                        <br />
                        <Checkmark />
                        Experience a collaborative working environment
                        <br />
                        <br />
                        <Checkmark />
                        Learn game development
                    </p>
                </motion.div>
            </div>

            <div className='background-a'>
                <VisibilitySensor
                    partialVisibility
                    onChange={isVisible => {
                        if (!isVisible) return;

                        setPlayedAnimations({
                            ...playedAnimations,
                            joinTeamCards: true,
                        });
                    }}
                >
                    <motion.div
                        initial='hidden'
                        animate={
                            playedAnimations.joinTeamCards ? 'visible' : ''
                        }
                        variants={{
                            hidden: {
                                opacity: 0,
                                translateY: '50px',
                            },
                            visible: {
                                opacity: 1,
                                translateY: '0px',
                            },
                        }}
                        transition={{
                            delay: 0.1,
                            bounce: false,
                        }}
                    >
                        <h4>Ready to join?</h4>
                        <h4>Join team...</h4>

                        <div id='info-cards-container'>
                            <Card title='Programmers' icon={programmingSvg}>
                                Tie the project together! Combine all assets and
                                bring the game to life through Unity and C#.
                            </Card>
                            <Card title='Artists' icon={artSvg}>
                                Work together with other artists to create
                                amazing 2D visuals for our games. Any art style
                                is welcome!
                            </Card>
                            <Card title='Animators' icon={animationSvg}>
                                Bring the game to life! Work closely with the
                                art team to make fluid, responsive, and engaging
                                animations.
                            </Card>
                            <Card title='Writers' icon={writersSvg}>
                                Layout the story of our games! Communicate with
                                club members to create amazing stories!
                            </Card>
                            <Card title='Musicians' icon={musicSvg}>
                                Produce inspiring music that captures the
                                feeling and emotion of the game scene.
                            </Card>
                        </div>
                    </motion.div>
                </VisibilitySensor>
            </div>
        </div>
    );
};

export default Home;
