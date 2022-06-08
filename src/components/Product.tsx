import { Link } from "react-router-dom";
import { useProducts } from "../context/product-context";
import { productProps } from "../types";
import { isProductInArray } from "../utils/isProductInArray";

export const Product = ({ product }: productProps) => {
  const { brand, id, image, discounted_price, initial_price, title } = product;
  const { cart, dispatch } = useProducts();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div
      key={id}
      className="w-[18rem] bg-white rounded border-solid m-2 border shadow hover:shadow-md"
    >
      <img className="w-full h-[22rem] rounded" src={image} alt={title} />
      <h3 className="px-4 mt-2">{title}</h3>
      <p className="text-gray-400 px-4 text-sm">{brand}</p>
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center gap-2">
          <p className="text-green-700 text-lg">&#8377; {discounted_price}</p>
          <p className="text-gray-400 text-sm line-through"> {initial_price}</p>
        </div>

        {isProductInArray(id, cart) ? (
          <Link
            to="/cart"
            className="border-gray-800  border text-gray-800 px-4 py-1 rounded hover:bg-gray-700 hover:text-gray-200"
          >
            Go to cart
          </Link>
        ) : (
          <button
            className="bg-gray-800 text-gray-200 px-4 py-1 rounded hover:bg-gray-700"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
