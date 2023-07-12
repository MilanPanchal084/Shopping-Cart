const CartReducer = (state, action) => {
   switch (action.type) {
      case "ADD":
         return {
            ...state,
            items: [...state.items, action.payload],
         };
      default:
         throw new Error("No case for that type");
   }
};

export default CartReducer;
