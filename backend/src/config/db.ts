import { Resident } from "../entities/Resident";
import { User } from "../entities/User";
import { DataSource } from "typeorm";
import { Post } from "../entities/Post";
import { Comment } from "../entities/Comment";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  username: "postgres",
  database: "postgres",
  password: "example",
  entities: [User, Post, Resident, Comment],
  synchronize: true,
  logging: ["error", "query"],
});
