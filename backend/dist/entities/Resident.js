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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentInput = exports.Resident = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
const User_1 = require("./User");
let Resident = class Resident extends typeorm_1.BaseEntity {
};
exports.Resident = Resident;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Resident.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resident.prototype, "prenom", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Post_1.Post]),
    (0, typeorm_1.ManyToMany)(() => Post_1.Post, (post) => post.residents),
    __metadata("design:type", Array)
], Resident.prototype, "posts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.OneToMany)(() => User_1.User, (user) => user.resident),
    __metadata("design:type", Array)
], Resident.prototype, "users", void 0);
exports.Resident = Resident = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Resident);
let ResidentInput = class ResidentInput {
};
exports.ResidentInput = ResidentInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResidentInput.prototype, "id", void 0);
exports.ResidentInput = ResidentInput = __decorate([
    (0, type_graphql_1.InputType)()
], ResidentInput);
//# sourceMappingURL=Resident.js.map