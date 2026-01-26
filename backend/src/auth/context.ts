import * as cookie from "cookie";
import jwt, { Secret } from "jsonwebtoken";
import type { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
import type { GraphQLContext } from "./types";

export async function createContext({
  req,
  res,
}: StandaloneServerContextFunctionArgument): Promise<GraphQLContext> {
  if (req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie as string);

    if (cookies.token) {
      try {
        const payload = jwt.verify(
          cookies.token,
          process.env.JWT_SECRET_KEY as Secret,
        ) as any;

        return {
          userName: payload.userName,
          role: payload.role,
          res,
        };
      } catch {}
    }
  }

  return { res };
}
