import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Comment, CommentInput } from "../entities/Comment";

@Resolver(Comment)
class CommentResolver {
  @Query(() => [Comment])
  async getAllComments() {
    const comments = await Comment.find({});
    return comments;
  }

  @Query(() => Comment)
  async getCommentById(@Arg("id") id: number) {
    const comment = await Comment.findOneByOrFail({ id });
    return comment;
  }

  @Mutation(() => Comment)
  async createNewComment(@Arg("data") newCommentData: CommentInput) {
    const newComment = new Comment();
    newComment.content = newCommentData.content;
    newComment.auteur = newCommentData.auteur;
    newComment.post = newCommentData.post;
    const result = await newComment.save();
    return result;
  }
}
export default CommentResolver;
