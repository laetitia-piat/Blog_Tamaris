"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const db_1 = require("./config/db");
const cookie = __importStar(require("cookie"));
const PostResolver_1 = __importDefault(require("./resolvers/PostResolver"));
const CommentResolver_1 = __importDefault(require("./resolvers/CommentResolver"));
const type_graphql_1 = require("type-graphql");
const ResidentResolver_1 = __importDefault(require("./resolvers/ResidentResolver"));
const UserResolver_1 = __importDefault(require("./resolvers/UserResolver"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const start = async () => {
    if (process.env.JWT_SECRET_KEY === null ||
        process.env.JWT_SECRET_KEY === undefined) {
        throw Error("no secret key!");
    }
    await db_1.dataSource.initialize();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [PostResolver_1.default, CommentResolver_1.default, ResidentResolver_1.default, UserResolver_1.default],
        emitSchemaFile: true,
        authChecker: ({ context }) => {
            if (context.email) {
                return true;
            }
            else {
                return false;
            }
        },
    });
    const server = new server_1.ApolloServer({
        schema,
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        context: async ({ req, res }) => {
            if (req.headers.cookie) {
                const cookies = cookie.parse(req.headers.cookie);
                if (cookies.token !== undefined) {
                    const payload = jsonwebtoken_1.default.verify(cookies.token, process.env.JWT_SECRET_KEY);
                    console.log("payload in context", payload);
                    if (payload) {
                        console.log("payload was found and returned to resolver");
                        return {
                            email: payload.email,
                            userRole: payload.userRole,
                            res: res,
                        };
                    }
                }
            }
            return { res: res };
        },
    });
    console.log(`🚀 Server listening at: ${url}`);
};
start();
//# sourceMappingURL=index.js.map