import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Game } from "./entities/Game";
import { GameResolver } from "./resolvers/GameResolver";
import cors from "cors";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "gdcgames",
    username: "postgres",
    synchronize: true,
    entities: [Game],
  });

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [GameResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

main().catch((error) => console.log(error));
