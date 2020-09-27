import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MikroORM } from '@mikro-orm/core';
import { Game } from './entities/Game';
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);

    const game = orm.em.create(Game, { name: 'Spooksville' });
    orm.em.persistAndFlush(game);
};

main();

ReactDOM.render(<App />, document.getElementById('root'));
