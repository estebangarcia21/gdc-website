import React from 'react';
import concept_art from '../assets/images/concept_art.png';
import programming_svg from '../assets/svgs/code.svg';
import animation_svg from '../assets/svgs/animation-motion.svg';
import music_svg from '../assets/svgs/music.svg';
import art_svg from '../assets/svgs/brush-paintbrush.svg';
import writers_svg from '../assets/svgs/pencil-draw.svg';

interface CardProps {
    title: string;
    icon: string;
}

const InfoCard: React.FC<CardProps> = (props) => {
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
    return (
        <div>
            <div id='home-banner'>
                <div className='vertical-center'>
                    <div id='home-banner-left-panel'>
                        <p className='title'>Game Development Club</p>
                        <p className='subtitle'>The Community of Communities</p>
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

            <p className='title center-text'>What is Game Development Club?</p>

            <p id='home-description' className='text center-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                soluta, rem hic voluptatem accusamus tempora sapiente molestiae
                at nesciunt dolore totam non, et, culpa consequuntur a ea
                voluptates eum quibusdam? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam rerum sapiente culpa similique
                repellendus error fugiat itaque, fugit dolorum mollitia
                distinctio odio, minima alias, quae repudiandae odit suscipit
                cupiditate eum?
            </p>

            <p className='title center-text'>Join a Team</p>

            <div id='info-cards'>
                <InfoCard title='Programmers' icon={programming_svg}>
                    Tie the project together! Programmers connect all assets and
                    bring the game to life through Unity and C#.
                </InfoCard>
                <InfoCard title='Artists' icon={art_svg}>
                    Work together with other artists to create amazing 2D
                    visuals for our games. Any art style is welcome!
                </InfoCard>
                <InfoCard title='Animators' icon={animation_svg}>
                    Bring the game to life! Work closely with the art team to
                    make fluid, responsive, and engaging animations.
                </InfoCard>
                <InfoCard title='Writers' icon={writers_svg}>
                    Layout layout the story of our games! Communicate with club
                    members to create amazing stories!
                </InfoCard>
                <InfoCard title='Musicians' icon={music_svg}>
                    Produce inspiring music that captures the feeling and
                    emotion of the game environment.
                </InfoCard>
            </div>
        </div>
    );
};

export default Homepage;
