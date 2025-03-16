import { PostInput, Post } from "../entities/Post";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  async getAllPosts() {
    const posts = await Post.find({
      relations: ["residents", "comments"],
    });
    return posts;
  }

  @Query(() => Post)
  async getPostById(@Arg("id") id: number) {
    const post = await Post.findOneByOrFail({ id: id });
    return post;
  }

  @Mutation(() => Post)
  async createNewPost(@Arg("data") newPOstData: PostInput) {
    const newPostToSave = Post.create({
      ...newPOstData,
    });
    const result = await newPostToSave.save();
    return result;
  }
}

export default PostResolver;
