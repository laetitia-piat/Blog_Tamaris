import { PostInput, Posts } from "../entities/Posts";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Posts)
class PostResolver {
  @Query(() => [Posts])
  async getAllPosts() {
    const posts = await Posts.find({});
    return posts;
  }

  @Query(() => Posts)
  async getPostById(@Arg("id") id: number) {
    const post = await Posts.findOneByOrFail({ id: id });
    return post;
  }

  @Mutation(() => Posts)
  async createNewPost(@Arg("data") newPOstData: PostInput) {
    const newPost = new Posts();
    newPost.titre = newPOstData.titre;
    newPost.resident = newPOstData.resident;
    newPost.photo = newPOstData.photo;
    const result = await newPost.save();
    return result;
  }
}

export default PostResolver;
