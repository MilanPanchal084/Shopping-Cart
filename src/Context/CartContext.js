import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext({
   items: [],
});

export const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(CartReducer, { items: [] });

   function addToCart(product) {
      // const updatedCart = [...state.items, product];

      dispatch({
         type: "ADD",
         payload: product,
      });
   }

   return (
      <CartContext.Provider
         value={{
            items: state.items,
            addToCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
