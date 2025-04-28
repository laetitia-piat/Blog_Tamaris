"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const Resident_1 = require("../entities/Resident");
const User_1 = require("../entities/User");
const typeorm_1 = require("typeorm");
const Post_1 = require("../entities/Post");
const Comment_1 = require("../entities/Comment");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "db",
    username: "postgres",
    database: "postgres",
    password: "example",
    entities: [User_1.User, Post_1.Post, Resident_1.Resident, Comment_1.Comment],
    synchronize: true,
    logging: ["error", "query"],
});
//# sourceMappingURL=db.js.map