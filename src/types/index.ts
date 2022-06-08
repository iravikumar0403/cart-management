import React from "react";

export type productWithQty = product & {
  quantity: number;
};

export type stateType = {
  products: product[];
  cart: productWithQty[];
};

export type product = {
  id: number;
  title: string;
  brand: string;
  image: string;
  discounted_price: string;
  initial_price: string;
};

export type actionType = {
  type: "ADD_TO_CART";
  payload: product;
};

export type productContext = {
  products: product[];
  cart: productWithQty[];
  dispatch: React.Dispatch<actionType>;
};

export type reactChildren = {
  children: React.ReactNode;
};

export type productProps = {
  product: product;
};
