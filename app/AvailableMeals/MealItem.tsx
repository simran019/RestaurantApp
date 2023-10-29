import { useContext } from "react";
import CartContext from "../store/cartContext";

import MealItemForm from "./MealItemForm";

const MealItem =(props:any)=>{
    const { id, name, description, price } = props;
    const cartCtx = useContext(CartContext);

    const addItemHandler=(qty:number)=>{
      cartCtx.addItem({
        id:id,
        name:name,
        description:description,
        quantity:qty,
        price:price
      })
    }
    return(
        <>
        <div className="flex justify-between mb-2 mt-2">
        <div className="flex justify-between w-1/2 items-center gap-4">
          <div>
            <h1 className="font-extrabold text-2xl">{name}</h1>
            <i>{description}</i>
            <p className="text-red-800 font-extrabold">Rs {price}</p>
          </div>
          <div className="font-extrabold">x1</div>
        </div>
        <MealItemForm id={id} name={name} description={description} price={price} onAdd={addItemHandler}/>
      </div>
      <hr className="border-0.5 border-red-800 rounded-xl"></hr>
        </>
    )
}

export default MealItem;