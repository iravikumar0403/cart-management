import { CartProducts, SavedForLater } from "../components";
import { Navbar } from "../components/Navbar";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <CartProducts />
      <SavedForLater />
    </>
  );
};
