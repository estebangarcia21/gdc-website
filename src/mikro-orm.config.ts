import { Game } from './entities/Game';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Game],
    dbName: 'gdcgames',
    type: 'postgresql',
    debug: process.env.NODE_ENV !== 'production',
} as Parameters<typeof MikroORM.init>[0];
