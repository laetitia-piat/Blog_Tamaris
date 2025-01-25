import "reflect-metadata";
import express from "express";
import cors from "cors";
import { dataSource } from "./config/db";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { Resident } from "./entities/Resident";

//const db = new sqlite3.Database("blog_tamaris.sqlite")
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello world!");
});

app.get("/user", async (_req, res) => {
  const user = await User.find();
  res.send(user);
});

app.post("/user", async (req, res) => {
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.resident = req.body.resident;
  const result = await newUser.save();
  res.send(result);
});

app.get("/post", async (_req, res) => {
  const post = await Post.find();
  res.send(post);
});
app.post("/post", async (req, res) => {
  const newPost = new Post();
  newPost.titre = req.body.titre;
  newPost.resident = req.body.resident;
  newPost.photo = req.body.photo;
  const result = await newPost.save();
  res.send(result);
});

app.get("/resident", async (_req, res) => {
  const resident = await Resident.find();
  res.send(resident);
});
app.post("/resident", async (req, res) => {
  const newResident = new Resident();
  newResident.prénom = req.body.prénom;
  const result = await newResident.save();
  res.send(result);
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`🚀 Server listening at: ${port}`);
});
