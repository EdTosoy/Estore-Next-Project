import Image from "next/image";
import {
  useAddToCartMutation,
  useGetCartListQuery,
} from "../generated/graphql";
import { uid } from "../lib/auth";

interface productType {
  products: {
    id: number;
    image: string;
    name: string;
    price: string;
    category: string;
  }[];
}

export default function ShopShowCase({ products }: productType) {
  const [addToCart] = useAddToCartMutation();
  return (
    <div className=" col-span-4 grid grid-cols-1 md:grid-cols-4 gap-5 pt-20 pb-10 ">
      <div className="col-span-full mb-4 flex flex-col md:flex-row  justify-between ">
        <div className="mb-4">
          <h1 className="text-2xl text-red-400 ">EStore HOT DEALS </h1>
          <p>subscribe to our newsletter for more products</p>
        </div>
        <select
          className="p-2 border text-lg rioun bg-gray-200"
          name="category"
          id="category"
        >
          <option value="All Products" defaultValue="true">
            All Products
          </option>
          <option value="Trending Products">Trending Products</option>
          <option value="New Arrivals">New Arrivals</option>
          <option value="Featured Products">Featured Products</option>
        </select>
      </div>
      {products.map(({ id, image, name, price, category }) => (
        <div
          className="text-center text-lg hover:scale-105 transform "
          key={id}
        >
          <div
            className="border rounded-xl overflow-hidden shadow-md relative py-5 px-6 cursor-pointer "
            key={id}
          >
            <div className="mb-4">
              <Image src={image} width={220} height={240} />
            </div>
            <h1>{name}</h1>
            <p className="text-red-500">${price}</p>
            <div
              className={`${
                category != "Featured Products" && "p-2"
              } absolute top-0 left-0  bg-red-400 rounded-br-lg text-white `}
            >
              {category == "Special Products" && "New"}
              {category == "Trending Products" && "Trend"}
            </div>
            <div className="absolute bottom-0 shadow-md right-0 border flex flex-col p-1 rounded-tl-2xl opacity-0 hover:opacity-100 ">
              <div className="grid place-content-center p-2 hover:bg-gray-200 rounded-full cursor-pointer ">
                <box-icon name="heart" color="red"></box-icon>
              </div>
              <div
                className="grid place-content-center p-2 hover:bg-gray-200 rounded-full cursor-pointer "
                onClick={async () => {
                  await addToCart({
                    variables: {
                      name,
                      url: image,
                      price,
                      user_id: uid,
                    },
                  });
                }}
              >
                <box-icon name="cart-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
