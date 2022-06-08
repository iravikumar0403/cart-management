import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useProducts } from "../context/product-context";

export const Navbar = () => {
  const { cart } = useProducts();
  return (
    <div className="flex w-full bg-purple-700 items-center justify-between">
      <Link to="/" className="px-4 py-2 text-2xl text-gray-200">
        eCart
      </Link>
      <Link
        to="/cart"
        className="flex text-xl mx-4 text-gray-200 text-semibold items-center"
      >
        <BsCart2 size={"2rem"} />
        <span className="ml-2"> Cart ({cart.length})</span>
      </Link>
    </div>
  );
};
