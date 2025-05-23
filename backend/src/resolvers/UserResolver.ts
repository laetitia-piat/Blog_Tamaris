import { LoginUserInput, User, UserInput } from "../entities/User";
import * as argon2 from "argon2";
import jwt, { Secret } from "jsonwebtoken";
import { Resident } from "../entities/Resident";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ObjectType()
class UserInfo {
  @Field()
  isLoggedIn: boolean;

  @Field({ nullable: true })
  userName?: String;

  @Field({ nullable: true })
  role?: String;
}

@Resolver(User)
class UserResolver {
  @Mutation(() => String)
  async register(@Arg("data") newUserData: UserInput) {
    let resident: Resident | undefined;

    if (newUserData.residentId) {
      resident =
        (await Resident.findOneBy({ id: newUserData.residentId })) || undefined;
      if (!resident) {
        throw new Error("Resident not found");
      }
    }
    const result = await User.save({
      userName: newUserData.userName,
      hashedPassword: await argon2.hash(newUserData.password),
      resident,
      role: newUserData.role,
    });
    console.log("result", result);
    return "ok";
  }

  @Mutation(() => String)
  async login(@Arg("data") loginUserData: LoginUserInput, @Ctx() context: any) {
    let isPasswordOk = false;
    const user = await User.findOneBy({ userName: loginUserData.userName });
    if (user) {
      isPasswordOk = await argon2.verify(
        user.hashedPassword,
        loginUserData.password
      );
    }
    if (isPasswordOk === true && user !== null) {
      const token = jwt.sign(
        { userName: user.userName },
        process.env.JWT_SECRET_KEY as Secret
      );
      context.res.setHeader("Set-Cookie", `token=${token}; Secure; HttpOnly`);
      return token;
    } else {
      throw new Error("Incorrect login!");
    }
  }

  @Mutation(() => String)
  async logout(@Ctx() context: any) {
    context.res.setHeader(
      "Set-Cookie",
      `token=${""}; Secure; HttpOnly; Max-Age=0`
    );
    return "You're log out";
  }

  @Query(() => UserInfo)
  async getUserInfo(@Ctx() context: any) {
    if (context.userName) {
      return {
        isLoggedIn: true,
        userName: context.userName,
        role: context.role,
      };
    } else {
      return {
        isLoggedIn: false,
      };
    }
  }

  @Query(() => [User])
  async getAllUsers() {
    return await User.find({ relations: ["resident"] });
  }
}
export default UserResolver;
