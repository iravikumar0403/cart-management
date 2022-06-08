import React from "react";
import { useProducts } from "../context/product-context";
import { CartProduct } from "./CartProduct";

export const SavedForLater = () => {
  const { saved } = useProducts();
  if (saved.length === 0) return null;
  return (
    <>
      <h2 className="text-center font-semibold text-xl my-4">
        Saved For Later
      </h2>
      <div className="flex">
        <div className="bg-white mx-auto rounded w-max">
          {saved.map((product) => (
            <CartProduct product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
