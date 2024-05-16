import React, { useReducer, useState } from 'react'
import '../store/slices/bank'
export default function Counter() {

   const reducer=(state,action)=>{
    switch(action.type){

        case 'INCREMENT':
            return{count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
        default:
            return state       ; 
    }
   }
    
    const[state,dispatch]=useReducer(reducer,{count:0})


  return (
    <>
    {state.count}
    <button onClick={()=>{dispatch({type: 'INCREMENT'} )}}>+</button>
    <button onClick={()=>{dispatch({type:'DECREMENT'})}}>-</button>
    </>
  )
}
