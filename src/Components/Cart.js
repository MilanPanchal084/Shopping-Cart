import { useConst } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
   const { items } = useContext(CartContext);
   console.log(items);
   return (
      <div>
         <div className="container">
            <h2>Cart Items</h2>
         </div>
      </div>
   );
}

export default Cart;
