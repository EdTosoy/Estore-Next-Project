import { MyContext } from "src/MyContext";
import { Ctx, Query, Resolver } from "type-graphql";
import { CartList } from "../entities/CartList";
import jwt_decode from "jwt-decode";
@Resolver()
export class GetCartlist {
  @Query(() => [CartList], { nullable: true })
  getCartList(@Ctx() { req }: MyContext) {
    const cookies = req.cookies;
    if (!cookies) {
      return null;
    }

    try {
      const token = cookies.token;
      const { user_id }: any = jwt_decode(token);

      return CartList.find({ where: { user_id } });
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
