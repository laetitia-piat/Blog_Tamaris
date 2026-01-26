import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/db";
import { createContext } from "./auth/context";
import { createSchema } from "./auth/schema";

const start = async () => {
  if (!process.env.JWT_SECRET_KEY) throw Error("no secret key!");

  await dataSource.initialize();

  const schema = await createSchema();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: createContext,
  });

  console.log(`🚀 Server listening at: ${url}`);
};

start();
