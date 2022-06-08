import React from "react";
import { productWithQty } from "../types";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useProducts } from "../context/product-context";
import { isProductInArray } from "../utils/isProductInArray";

type cartProductProps = {
  product: productWithQty;
};

export const CartProduct = ({ product }: cartProductProps) => {
  const { id, brand, image, discounted_price, initial_price, title, quantity } =
    product;
  const { saved, dispatch } = useProducts();

  return (
    <div className="flex w-[35rem] border rounded m-2">
      <div className="flex w-1/3">
        <img className="max-w-[10rem] rounded" src={image} alt={title} />
      </div>
      <div className="p-4 flex flex-col">
        <p>{title}</p>
        <p className="text-gray-600 text-sm">{brand}</p>
        <div className="flex items-center gap-2">
          <p className="text-green-700 text-lg">&#8377; {discounted_price}</p>
          <p className="text-gray-400 text-sm line-through"> {initial_price}</p>
        </div>
        <div className="flex">
          <button
            className="text-gray-800"
            disabled={quantity === 1}
            onClick={() =>
              dispatch({
                type: "DECREMENT_QTY",
                payload: product,
              })
            }
          >
            <AiFillMinusCircle size={"1.5rem"} />
          </button>
          <p className="border px-6 border-gray-500 rounded mx-4">{quantity}</p>
          <button
            className="text-gray-800"
            onClick={() =>
              dispatch({
                type: "INCREMENT_QTY",
                payload: product,
              })
            }
          >
            <AiFillPlusCircle size={"1.5rem"} />
          </button>
        </div>
        <div className="flex mt-auto">
          {isProductInArray(id, saved) ? (
            <>
              <button
                className="border hover:bg-gray-800 hover:text-gray-200 px-2 py-1 mx-2 rounded"
                onClick={() =>
                  dispatch({
                    type: "MOVE_TO_CART",
                    payload: product,
                  })
                }
              >
                Move to cart
              </button>
            </>
          ) : (
            <>
              <button
                className="border hover:bg-gray-800 hover:text-gray-200 px-2 py-1 mx-2 rounded"
                onClick={() =>
                  dispatch({
                    type: "SAVE_FOR_LATER",
                    payload: product,
                  })
                }
              >
                Save for later
              </button>
              <button
                className="border hover:bg-gray-800 hover:text-gray-200 px-2 py-1 mx-2 rounded"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove from cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
