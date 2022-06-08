import { Product } from "../components";
import { Navbar } from "../components/Navbar";
import { useProducts } from "../context/product-context";

export const ProductListing = () => {
  const { products } = useProducts();
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
