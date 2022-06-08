import { useProducts } from "../context/product-context";

export const CartPrice = () => {
  const { cart } = useProducts();

  const totalPrice = cart.reduce(
    (acc, curr) => parseInt(curr.initial_price) * curr.quantity + acc,
    0
  );

  const discount = cart.reduce(
    (acc, curr) =>
      (parseInt(curr.initial_price) - parseInt(curr.discounted_price)) *
        curr.quantity +
      acc,
    0
  );

  return (
    <div className="p-4">
      <p className="flex p-2">
        Price: <span className="pl-8 ml-auto">&#8377; {totalPrice}</span>
      </p>
      <p className="flex p-2">
        Discount: <span className="pl-8 ml-auto"> &#8377; {discount}</span>
      </p>
      <p className="flex p-2">
        Total Amount:
        <span className="pl-8 ml-auto text-green-500">
          &#8377; {totalPrice - discount}
        </span>
      </p>
      <hr />
      <p className="p-4 text-green-500">
        You will save &#8377; {discount} on this order.
      </p>
    </div>
  );
};
