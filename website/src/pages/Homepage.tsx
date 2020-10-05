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
            />
            <p className='info-card--title'>{props.title}</p>
            <div className='info-card--bar' />
            <p className='text--gray center-text'>{props.children}</p>
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
                Game Development Club is a team of students commited to create
                fun and exciting games. From no experience to years of
                experience, Game Development Club accepts anyone from any skill
                level. Resources allow people to learn. Join the first
                successful Game Development Club at Franklin High School and
                learn how to create your own games!
            </p>

            <div id='info-cards'>
                <InfoCard title='Programmer' icon={programming_svg}>
                    Programmers are in charge of programming all of the game.
                </InfoCard>
                <InfoCard title='Artist' icon={art_svg}>
                    Programmers are in charge of programming all of the game.
                </InfoCard>
                <InfoCard title='Animator' icon={animation_svg}>
                    Programmers are in charge of programming all of the game.
                </InfoCard>
                <InfoCard title='Writer' icon={writers_svg}>
                    Programmers are in charge of programming all of the game.
                </InfoCard>
                <InfoCard title='Musician' icon={music_svg}>
                    Programmers are in charge of programming all of the game.
                </InfoCard>
            </div>
        </div>
    );
};

export default Homepage;
