import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        state.cart.map(item => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;