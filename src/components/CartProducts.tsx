import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/product-context";
import { CartPrice } from "./CartPrice";
import { CartProduct } from "./CartProduct";

export const CartProducts = () => {
  const { cart } = useProducts();

  if (cart.length === 0)
    return (
      <div className="text-center mt-20 ">
        No items added yet.{" "}
        <Link className="text-green-700 underline" to="/">
          Browse Products
        </Link>
      </div>
    );

  return (
    <div>
      <div className="flex py-8">
        <div className="bg-white mx-2 rounded ml-auto w-max">
          {cart.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </div>
        <div className="bg-white mx-2 rounded mr-auto w-max">
          <CartPrice />
        </div>
      </div>
    </div>
  );
};
