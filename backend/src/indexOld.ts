import "reflect-metadata";
import express from "express";
import cors from "cors";
import { dataSource } from "./config/db";
import { Users } from "./entities/Users";
import { Posts } from "./entities/Posts";
import { Residents } from "./entities/Residents";

//const db = new sqlite3.Database("blog_tamaris.sqlite")
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello world!");
});

app.get("/users", async (_req, res) => {
  const users = await Users.find();
  res.send(users);
});

app.post("/users", async (req, res) => {
  const newUser = new Users();
  newUser.email = req.body.email;
  newUser.resident = req.body.resident;
  const result = await newUser.save();
  res.send(result);
});

app.get("/posts", async (_req, res) => {
  const posts = await Posts.find();
  res.send(posts);
});
app.post("/posts", async (req, res) => {
  const newPost = new Posts();
  newPost.titre = req.body.titre;
  newPost.resident = req.body.resident;
  newPost.photo = req.body.photo;
  const result = await newPost.save();
  res.send(result);
});

app.get("/residents", async (_req, res) => {
  const residents = await Residents.find();
  res.send(residents);
});
app.post("/residents", async (req, res) => {
  const newResident = new Residents();
  newResident.prénom = req.body.prénom;
  const result = await newResident.save();
  res.send(result);
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`🚀 Server listening at: ${port}`);
});
