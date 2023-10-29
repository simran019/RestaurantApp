import { useContext } from "react";
import CartContext from "../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props: any) => {
  const cartCtx = useContext(CartContext);
  const itemsInCart = cartCtx.items;
  const closeCartHandler = () => {
    props.onShow(false);
  };

  
  return (
    <div className="bg-white w-1/2 h-1/2 overflow-y-auto px-4 py-8 rounded-md flex flex-col justify-between relative z-20">
      {itemsInCart.map((item:any, i:any) => {
        return (
          <CartItem id={item.id} name={item.name} description={item.description} quantity={item.quantity} price={item.price}/>
        );
      })}
      <div className="flex justify-between">
        <div className="text-3xl font-extrabold">Total Amount</div>
        <div className="flex flex-col items-end gap-4">
          <div className="text-3xl font-extrabold">Rs {cartCtx.totalAmount}</div>
          <div className="flex gap-4">
            <button
              className="border-2 border-red-800 text-red-800 hover:text-white hover:bg-red-800 w-16 rounded-xl px-2"
              onClick={closeCartHandler}
            >
              Close
            </button>
            <button className="border-2 border-red-800 text-white bg-red-800 hover:text-white hover:bg-white hover:text-red-800 w-16 rounded-xl px-2">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
