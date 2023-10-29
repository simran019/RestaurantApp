import { useContext } from "react";
import CartContext from "../store/cartContext";

const CartItem =(props:any)=>{
    const {id, name, description, quantity, price} = props;
  const cartCtx = useContext(CartContext);
  const removeItemHandler=(id:any)=>{
    cartCtx.removeItem({
      id:id,
    })      
  }
    const addItemHandler=()=>{
      cartCtx.addItem({
        id:id,
        name:name,
        description:description,
        quantity:1,
        price:price
      })      
    }
    return(
        <>
            <div className="flex justify-between items-center mb-2 p-2">
              <div className="w-1/3 flex flex-col justify-between gap-2 font-bold h-18">
                <div className="text-2xl">{name}</div>
                <div className="flex justify-between">
                  <div className="text-red-800">Rs {price}</div>
                  <div>x{quantity}</div>
                </div>
              </div>
              <div className="w-1/3 flex items-center gap-2 justify-end">
                <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800"
                onClick={()=>removeItemHandler(id)}
                >
                  -
                </button>
                <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800"
                onClick={addItemHandler}
                >
                  +
                </button>
              </div>
            </div>
            <hr className="h-0.5 bg-red-800"></hr>
          </>
    )
}

export default CartItem;
