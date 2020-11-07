import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import Game from './entities/Game';
import Todo from './entities/Todo';
import GameResolver from './resolvers/GameResolver';
import TodoResolver from './resolvers/TodoResolver';

const main = async () => {
  await createConnection({
    type: 'mysql',
    username: 'root',
    password: 'password',
    database: 'gdc_website',
    synchronize: true,
    entities: [Game, Todo],
  });

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [GameResolver, TodoResolver],
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server started on localhost:4000');
  });
};

main().catch(error => console.log(error));
