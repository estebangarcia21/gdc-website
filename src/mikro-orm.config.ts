import { Options } from '@mikro-orm/core';
import { Game } from './entities/Game';
import path from 'path';

const config: Options = {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Game],
    dbName: 'gdcgames',
    type: 'postgresql',
    debug: process.env.NODE_ENV !== 'production',
};

export default config;
