import { PostInput, Post } from "../entities/Post";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  async getAllPosts() {
    const posts = await Post.find({});
    return posts;
  }

  @Query(() => Post)
  async getPostById(@Arg("id") id: number) {
    const post = await Post.findOneByOrFail({ id: id });
    return post;
  }

  @Mutation(() => Post)
  async createNewPost(@Arg("data") newPOstData: PostInput) {
    const newPost = new Post();
    newPost.titre = newPOstData.titre;
    newPost.resident = newPOstData.resident;
    newPost.photo = newPOstData.photo;
    const result = await newPost.save();
    return result;
  }
}

export default PostResolver;
