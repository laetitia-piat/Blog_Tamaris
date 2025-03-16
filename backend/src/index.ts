import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/db";

import PostResolver from "./resolvers/PostResolver";
import CommentResolver from "./resolvers/CommentResolver";
import { buildSchema } from "type-graphql";
import ResidentResolver from "./resolvers/ResidentResolver";

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [PostResolver, CommentResolver, ResidentResolver],
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server listening at: ${url}`);
};
start();
