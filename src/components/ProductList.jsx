import ProductCard from "./ProductCard";
import { electronics } from "../productData/data.js";

const ProductList = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Electronics</h1>
        <div className="flex flex-wrap gap-4">
          {electronics.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
