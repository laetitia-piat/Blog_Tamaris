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
exports.UpdateUserInput = exports.DeleteUserInput = exports.LoginUserInput = exports.UserInput = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let UserInput = class UserInput {
};
exports.UserInput = UserInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "userName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserInput.prototype, "residentId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: "USER" }),
    __metadata("design:type", String)
], UserInput.prototype, "role", void 0);
exports.UserInput = UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
let LoginUserInput = class LoginUserInput {
};
exports.LoginUserInput = LoginUserInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginUserInput.prototype, "userName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginUserInput.prototype, "password", void 0);
exports.LoginUserInput = LoginUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], LoginUserInput);
let DeleteUserInput = class DeleteUserInput {
};
exports.DeleteUserInput = DeleteUserInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DeleteUserInput.prototype, "userId", void 0);
exports.DeleteUserInput = DeleteUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteUserInput);
let UpdateUserInput = class UpdateUserInput {
};
exports.UpdateUserInput = UpdateUserInput;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "userName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "residentId", void 0);
exports.UpdateUserInput = UpdateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateUserInput);
//# sourceMappingURL=UserInput.js.map