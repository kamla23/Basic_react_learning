import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div style={{ display: "flex", gap: "20px" }}>
        
     
        <div style={{ width: "60%" }}>
          <ProductList />
        </div>

        <div style={{ width: "40%", borderLeft: "2px solid black" }}>
          <Cart />
        </div>

      </div>
    </CartProvider>
  );
}
export default App;