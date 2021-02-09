import { useGetCartListQuery } from "../generated/graphql";
import Link from "next/link";
export default function CartFooter() {
  const { data } = useGetCartListQuery();
  const numberOfItems = data?.getCartList?.length;
  let total: number = 0;
  data?.getCartList?.map(({ price }) => (total += parseInt(price!)));
  return (
    <footer className="grid-container  bg-white  ">
      <main className="col-start-2 col-end-3 flex flex-col md:flex-row items-baseline  py-12  justify-between p-4   ">
        <button className="p-2 bg-gray-200 hidden md:block">Select All</button>
        <button className="p-2 bg-gray-200 hidden md:block">Remove All</button>
        <p className="text-xl  mr-10 mb-4 ">
          Merchandise Subtotal ({numberOfItems} items):
          <span className=" text-4xl  text-red-500">${total}</span>
        </p>
        <Link href="/checkOut">
          <button className="bg-black py-2 px-8 rounded-md transform hover:scale-105 text-white text-lg">
            Check Out
          </button>
        </Link>
      </main>
    </footer>
  );
}
