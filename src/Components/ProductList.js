import React, { useContext, useEffect, useState } from "react";
import Products from "./Products";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function ProductList() {
   const [productList, setProductList] = useState([]);
   const { items } = useContext(CartContext);

   const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((json) => {
            setProductList(json);
         });
   };
   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         <div className="container d-flex justify-content-between align-center mt-3">
            <div className="heading">
               <h2>Shop Page</h2>
            </div>
            <div>
               <Link to="/cart">
                  <button className="btn btn-outline-primary">
                     <svg
                        className="mx-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                     >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                     </svg>
                     Cart ({items.length} items)
                  </button>
               </Link>
            </div>
         </div>
         <div className="container">
            <div className="products">
               {productList.slice(0, 10).map((listItem) => {
                  return <Products productData={listItem} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default ProductList;
