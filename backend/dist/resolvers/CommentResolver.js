"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Comment_1 = require("../entities/Comment");
const Post_1 = require("../entities/Post");
let CommentResolver = class CommentResolver {
    async getAllComments() {
        const comments = await Comment_1.Comment.find({});
        return comments;
    }
    async getCommentById(id) {
        const comment = await Comment_1.Comment.findOneByOrFail({ id });
        return comment;
    }
    async createNewComment(newCommentData) {
        const post = await Post_1.Post.findOne({ where: { id: newCommentData.post.id } });
        if (!post) {
            throw new Error("Post not found");
        }
        const newComment = new Comment_1.Comment();
        newComment.content = newCommentData.content;
        newComment.auteur = newCommentData.auteur;
        newComment.post = post;
        const result = await newComment.save();
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Comment_1.Comment]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "getAllComments", null);
__decorate([
    (0, type_graphql_1.Query)(() => Comment_1.Comment),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "getCommentById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Comment_1.Comment),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Comment_1.CommentInput]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "createNewComment", null);
CommentResolver = __decorate([
    (0, type_graphql_1.Resolver)(Comment_1.Comment)
], CommentResolver);
exports.default = CommentResolver;
//# sourceMappingURL=CommentResolver.js.map