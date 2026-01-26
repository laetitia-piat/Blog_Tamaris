import { buildSchema } from "type-graphql";
import { authChecker } from "./authChecker";
import { resolvers } from "../resolvers/Index";

export async function createSchema() {
  return buildSchema({
    resolvers,
    emitSchemaFile: true,
    authChecker,
  });
}
