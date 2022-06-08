import { Product } from "../components";
import { useProducts } from "../context/product-context";

export const ProductListing = () => {
  const { products } = useProducts();
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl p-4">{`Showing ${products.length} of ${products.length} products`}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};
