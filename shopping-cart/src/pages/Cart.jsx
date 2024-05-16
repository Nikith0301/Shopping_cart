import React,{useState,useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";

import { addToCart,removeFromCart } from "../store/slices/cart-slice";
import CartTile from '../components/CartTile';



export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
const[data,setData]=useState([]);
  const { cart } = useSelector((state) => state);//dont keep state.cart

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    setData(cart)
  }, [cart]);

  console.log(cart, totalCart);


  function handleClick(){
    // let d=useSelector((state)=>state);
    console.log(cart);
    setData(cart)
  }


  return (
    <div>
      <button onClick={()=>handleClick()}>click Me</button>
    {data && data.length ? data.map((cartItem)=>{

     return <CartTile cartItem={cartItem}/>
    //   return <img
    //   src={cartItem?.image}
    //   className="h-28 rounded-lg"
    //   alt={cartItem?.title}
    // />
    }) :data.length }
    
    </div>
  )
}
