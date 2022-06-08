import { product, productWithQty } from "../types";

export const isProductInArray = (
  product_id: number,
  arr: product[] | productWithQty[]
) => arr.find((product) => product.id === product_id);
