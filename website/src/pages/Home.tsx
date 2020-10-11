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

const Card: React.FC<TeamCardProps> = (props) => {
  return (
    <div className="info-card box-shadow">
      <img src={props.icon} width="35px" height="35px" alt="Icon" />
      <p style={{ fontSize: '20px', margin: '10px' }}>{props.title}</p>
      <p style={{ fontSize: '14px', color: '#414141' }}>{props.children}</p>
    </div>
  );
};

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState({
    title: false,
    joinTeamCards: false,
  });

  return (
    <div>
      <div id="home-banner">
        <h1>Game Development Club</h1>
        <h2>Creating games since 2019</h2>
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
        <h3>What is Game Development Club?</h3>

        <div className="wrapper">
          <p>
            Game Development Club is a club where artists, programmers,
            animators, musicians, and writers work together to create amazing
            games!
            <br />
            <br />
            At Game Development Club, people can learn a
          </p>
        </div>
      </animated.div>

      <h3>Why join Game Development Club?</h3>

      <div id="join-reasons-container">
        <ul>
          <li>Meet new people who share your interests</li>
          <li>Become better at your craft</li>
          <li>Experience a collaborative working enviornment</li>
          <li>Learn Game Development</li>
        </ul>
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
          <h4>Join a Team</h4>

          <div id="info-cards">
            <Card title="Programmers" icon={programming_svg}>
              Tie the project together! Programmers connect all assets and bring
              the game to life through Unity and C#.
            </Card>
            <Card title="Artists" icon={art_svg}>
              Work together with other artists to create amazing 2D visuals for
              our games. Any art style is welcome!
            </Card>
            <Card title="Animators" icon={animation_svg}>
              Bring the game to life! Work closely with the art team to make
              fluid, responsive, and engaging animations.
            </Card>
            <Card title="Writers" icon={writers_svg}>
              Layout layout the story of our games! Communicate with club
              members to create amazing stories!
            </Card>
            <Card title="Musicians" icon={music_svg}>
              Produce inspiring music that captures the feeling and emotion of
              the game environment.
            </Card>
          </div>
        </animated.div>
      </VisibilitySensor>
    </div>
  );
};

export default Home;
