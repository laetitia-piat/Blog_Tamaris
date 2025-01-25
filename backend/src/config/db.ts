import { Resident } from "../entities/Resident";
import { User } from "../entities/User";
import { DataSource } from "typeorm";
import { Post } from "../entities/Post";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  username: "postgres",
  database: "postgres",
  password: "example",
  entities: [User, Post, Resident],
  synchronize: true,
  logging: ["error", "query"],
});
