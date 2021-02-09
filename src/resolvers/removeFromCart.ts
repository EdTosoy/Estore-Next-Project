import { Arg, Mutation, Resolver } from "type-graphql";

import { CartList } from "../entities/CartList";
@Resolver()
export class RemoveFromCart {
  @Mutation(() => Boolean)
  async removeFromCart(
    @Arg("id") id: number,
    @Arg("user_id") user_id: string
  ) {
    try {
      await CartList.delete({ id, user_id });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
