"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentInput = exports.Comment = void 0;
const type__1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
let Comment = class Comment extends typeorm_1.BaseEntity {};
exports.Comment = Comment;
__decorate(
  [
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number),
  ],
  Comment.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String),
  ],
  Comment.prototype,
  "content",
  void 0
);
__decorate(
  [
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String),
  ],
  Comment.prototype,
  "auteur",
  void 0
);
__decorate(
  [
    (0, type_graphql_1.Field)(() => Post_1.Post),
    (0, typeorm_1.ManyToOne)(
      () => Post_1.Post,
      (post) => post.comments
    ),
    __metadata("design:type", Post_1.Post),
  ],
  Comment.prototype,
  "post",
  void 0
);
exports.Comment = Comment = __decorate(
  [(0, type_graphql_1.ObjectType)(), (0, typeorm_1.Entity)()],
  Comment
);
let CommentInput = class CommentInput {};
exports.CommentInput = CommentInput;
__decorate(
  [(0, type_graphql_1.Field)(), __metadata("design:type", String)],
  CommentInput.prototype,
  "content",
  void 0
);
__decorate(
  [(0, type_graphql_1.Field)(), __metadata("design:type", String)],
  CommentInput.prototype,
  "auteur",
  void 0
);
__decorate(
  [
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Post_1.Post),
  ],
  CommentInput.prototype,
  "post",
  void 0
);
exports.CommentInput = CommentInput = __decorate(
  [(0, type_graphql_1.InputType)()],
  CommentInput
);
//# sourceMappingURL=Comment.js.map
