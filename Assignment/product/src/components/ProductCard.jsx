import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;