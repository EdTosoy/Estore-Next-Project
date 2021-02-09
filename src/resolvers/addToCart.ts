import { Arg, Mutation, Resolver } from "type-graphql";

import { CartList } from "../entities/CartList";
@Resolver()
export class AddToCart {
  @Mutation(() => Boolean)
  async addToCart(
    @Arg("name") name: string,
    @Arg("price") price: string,
    @Arg("user_id") user_id: string,
    @Arg("url") url: string
  ) {
    // const productExist = await CartList.find({ where: { user_id } });
    // // if (productExist.length !== 0) {
    // //   return false;
    // // }
    try {
      await CartList.insert({
        name,
        price,
        user_id,
        url,
      });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
