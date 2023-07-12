import "./App.css";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.css";
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
   return (
      <CartProvider>
         <Router>
            <Routes>
               <Route exact path="/" element={<ProductList />} />
               <Route exact path="/cart" element={<Cart />} />
            </Routes>
         </Router>
      </CartProvider>
   );
}

export default App;
