import React from 'react';
import { GameCardRenderer } from './game-data';

const Ourgamespage: React.FC = () => {
    return (
        <div id='our-games'>
            <div>{GameCardRenderer.showGamesFromYears('2020-2021')}</div>
        </div>
    );
};

export default Ourgamespage;
