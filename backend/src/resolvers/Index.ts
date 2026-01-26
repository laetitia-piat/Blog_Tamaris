import CommentResolver from "./CommentResolver";
import PostResolver from "./PostResolver";
import ResidentResolver from "./ResidentResolver";
import UserResolver from "./UserResolver";

export const resolvers = [
  PostResolver,
  CommentResolver,
  ResidentResolver,
  UserResolver,
] as const;
