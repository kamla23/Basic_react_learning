import { data } from "../data";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      {data.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ProductList;