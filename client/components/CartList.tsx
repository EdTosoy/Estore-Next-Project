import { useGetCartListQuery } from "generated/graphql";
import Image from "next/image";
import { useState } from "react";
import CartItems from "./CartItems";
export default function CartList() {
  const { data } = useGetCartListQuery();
  return (
    <div className="bg-gray-100">
      <div className="grid-container py-10 mb-6 border-b  bg-white">
        <div className="col-start-2 col-end-3 text-2xl text-red-600  ">
          EStore <span className="font-light">&#65372;</span> Shopping Cart
        </div>
      </div>
      {data?.getCartList === null || data?.getCartList?.length === 0 ? (
        <div className="grid place-content-center col-start-2  py-16 px-4 md:p-32 col-end-3">
          <div className=" text-red-500 md:text-2xl font-light md:mt-10 border-dashed border-red-400  p-8 md:p-10 border rounded-lg  ">
            There's no Item in this Cart
          </div>
        </div>
      ) : (
        <CartItems />
      )}
    </div>
  );
}
