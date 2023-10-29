"use client";
import { useContext, useState } from "react";

import Header from './Header/page'
import Section from './Section/page'
import MealsSummary from './MealsSummary/page'
import AvailableMeals from './AvailableMeals/page'
import Cart from './Cart/page'
import CartContext from "./store/cartContext";
import CartProvider from "./store/cartProvider";

export default function Home() {
  
 
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartShowHandler =(val:boolean)=>{
    setCartIsShown(val)
  }

  return (
    <CartProvider>
    <div className='border-2 border-red-800 bg-slate-800 w-full h-full flex flex-col items-center relative z-0'>
      <Header onShow={cartShowHandler}/>
      <Section/>
      <MealsSummary/>
      <AvailableMeals/>
      {
        cartIsShown && (<div className="w-full h-screen bg-black opacity-85 flex items-center justify-center absolute z-10" style={{top:"0px"}}><Cart onShow={cartShowHandler}/></div>)
      }
    </div>
    </CartProvider>
  )
}
