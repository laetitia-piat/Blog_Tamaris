import type { AuthChecker } from "type-graphql";
import { GraphQLContext } from "./types";

export const authChecker: AuthChecker<GraphQLContext> = (
  { context },
  roles,
) => {
  // auth basique : connecté
  if (!context.userName) return false;

  //  gestion de rôles type @Authorized("ADMIN")
  if (roles.length === 0) return true;
  return !!context.role && roles.includes(context.role);
};
