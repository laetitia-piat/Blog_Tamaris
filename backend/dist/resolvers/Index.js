"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const CommentResolver_1 = __importDefault(require("./CommentResolver"));
const PostResolver_1 = __importDefault(require("./PostResolver"));
const ResidentResolver_1 = __importDefault(require("./ResidentResolver"));
const UserResolver_1 = __importDefault(require("./UserResolver"));
exports.resolvers = [
    PostResolver_1.default,
    CommentResolver_1.default,
    ResidentResolver_1.default,
    UserResolver_1.default,
];
//# sourceMappingURL=Index.js.map