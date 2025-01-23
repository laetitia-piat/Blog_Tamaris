import { Posts } from "../entities/Posts";
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
  async createNewPost(
    @Arg("titre") titre: string,
    @Arg("resident") resident: string,
    @Arg("photo") photo: string
  ) {
    const newPost = new Posts();
    newPost.titre = titre;
    newPost.resident = resident;
    newPost.photo = photo;
    const result = await newPost.save();
    return result;
  }
}

export default PostResolver;
