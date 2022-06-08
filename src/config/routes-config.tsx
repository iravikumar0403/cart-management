import { ProductListing, Cart } from "../pages";

export const routes = [
  {
    path: "/",
    element: <ProductListing />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
