import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { GameResolver } from './resolvers/GameResolver';
import { createConnection } from 'typeorm';
import { Game } from './entities/Game';

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'gdcgames',
        username: 'postgres',
        synchronize: true,
        entities: [Game],
    });

    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [GameResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('Server started on localhost:4000');
    });
};

main();
