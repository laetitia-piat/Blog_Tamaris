import { Residents } from "../entities/Residents";
import { Users } from "../entities/Users";
import { DataSource } from "typeorm";
import { Posts } from "../entities/Posts";

// export const dataSource = new DataSource({
//   database: "blog_tamaris.sqlite",
//   type: "sqlite",
//   entities: [Users, Posts, Residents],
//   synchronize: true,
//   logging: ["error", "query"],
// });

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  username: "postgres",
  database: "postgres",
  password: "example",
  entities: [Users, Posts, Residents],
  synchronize: true,
  logging: ["error", "query"],
});
