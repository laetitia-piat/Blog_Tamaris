import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/db";
import * as cookie from "cookie";
import PostResolver from "./resolvers/PostResolver";
import CommentResolver from "./resolvers/CommentResolver";
import { buildSchema } from "type-graphql";
import ResidentResolver from "./resolvers/ResidentResolver";
import UserResolver from "./resolvers/UserResolver";
import jwt, { Secret } from "jsonwebtoken";

const start = async () => {
  if (
    process.env.JWT_SECRET_KEY === null ||
    process.env.JWT_SECRET_KEY === undefined
  ) {
    throw Error("no secret key!");
  }
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [PostResolver, CommentResolver, ResidentResolver, UserResolver],
    emitSchemaFile: true,
    authChecker: ({ context }) => {
      if (context.email) {
        return true;
      } else {
        return false;
      }
    },
  });

  const server = new ApolloServer({
    schema,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
      if (req.headers.cookie) {
        const cookies: any = cookie.parse(req.headers.cookie as string);
        if (cookies.token !== undefined) {
          const payload: any = jwt.verify(
            cookies.token,
            process.env.JWT_SECRET_KEY as Secret
          );
          console.log("payload in context", payload);
          if (payload) {
            console.log("payload was found and returned to resolver");
            return {
              email: payload.email,
              userRole: payload.userRole,
              res: res,
            };
          }
        }
      }
      return { res: res };
    },
  });

  console.log(`🚀 Server listening at: ${url}`);
};
start();
