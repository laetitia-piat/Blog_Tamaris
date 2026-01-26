import type { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";

export type GraphQLContext = {
  userName?: string;
  role?: string;
  res: any;
};

export type ContextArgs = StandaloneServerContextFunctionArgument;
