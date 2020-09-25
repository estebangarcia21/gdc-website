import React from 'react';
import { GameCardRenderer } from './game-data';

const Ourgamespage: React.FC = () => {
    return <div>{GameCardRenderer.renderCards()}</div>;
};

export default Ourgamespage;
