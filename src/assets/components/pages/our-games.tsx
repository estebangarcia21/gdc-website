import React from 'react';

const Ourgamespage: React.FC = () => {
    return (
        <div>
            <div id='our-games-header'>
                <div className='title-text vertical-center'>Games</div>
            </div>

            <div className='black subtitle-text horizontal-text-center'>
                Download and Play
            </div>

            <div className='description horizontal-center'>
                Explore any of our games and download the installer for your
                operating system
            </div>

            <div className='search-bar horizontal-center'>
                <input type='text' placeholder='search for games' />
                <i className='fa fa-search' />
            </div>
        </div>
    );
};

export default Ourgamespage;
