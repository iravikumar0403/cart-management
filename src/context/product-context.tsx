import React, { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/product-reducer";
import {
  product,
  productContext,
  productWithQty,
  reactChildren,
} from "../types";
import data from "../data.json";

const ProductContext = createContext<productContext>({} as productContext);

const initialState = {
  products: data as product[],
  cart: [] as productWithQty[],
};

export const ProductProvider = ({ children }: reactChildren) => {
  const [{ products, cart }, dispatch] = useReducer(
    productReducer,
    initialState
  );
  return (
    <ProductContext.Provider value={{ products, cart, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
