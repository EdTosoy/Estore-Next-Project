import Image from "next/image";
import { uid } from "../lib/auth";
import {
  useGetCartListQuery,
  useRemoveFromCartMutation,
} from "../generated/graphql";

export default function CartItems() {
  const { data } = useGetCartListQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  return (
    <div className="grid-container text-sm md:text-base ">
      <div className="col-start-2 col-end-3 ">
        <div className=" md:grid grid-cols-8 bg-white  border rounded-md hidden  p-4 mb-4 ">
          <p className="col-span-4 pl-10 "> Product</p>
          <p className="text-gray-400">Unit Price</p>
          <p className="text-gray-400">Quantity</p>
          <p className="text-gray-400">Total Price</p>
          <p className="text-gray-400 justify-self-end mr-10 ">Actions</p>
        </div>
        <div className="border">
          {data?.getCartList.map(({ price, id, name, url }) => (
            <div
              className=" grid grid-cols-6 sm:grid-cols-8 bg-white items-center  border-b rounded-md p-4  md:p-4 "
              key={id}
            >
              <p className="col-span-full sm:col-span-4 md:pl-10  grid grid-cols-2 items-center   ">
                <div className="relative hidden md:block w-16  h-24">
                  <Image src={url} layout="fill" />
                </div>
                <p className="mb-2" >{name}</p>
              </p>
              <p className="">$ {price}</p>
              <p className="">1</p>
              <p className="text-red-500">$ {price}</p>
              <button
                className="sm:p-2  col-start-1 sm:col-start-8  hover:bg-gray-200 sm:rounded-md text-red-500"
                onClick={async () => {
                  await removeFromCart({
                    variables: {
                      id,
                      user_id: uid,
                    },
                    update: (cache) => {
                      cache.evict({ id: `CartList:${id}` });
                    },
                  });
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
