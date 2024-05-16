import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../store/slices/cart-slice";
import { addToCart } from "../store/slices/cart-slice";
export default function ProductTile({ product }) {

  

let dispatch=useDispatch();



  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>

        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product.title}
          </h1>
          <button onClick={()=>{dispatch(addToCart(product))}}>addTo cart</button>
        </div>
        
      </div>
    </div>
  );
}
