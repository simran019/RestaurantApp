import { useReducer, useContext } from "react";
import CartContext from "./cartContext"

const defaultCartState={
    items:[],
    totalAmount:0,
}

const cartReducer =(state:any, action:any)=>{
    if(action.type=="ADD_ITEM"){
        
        let updatedItems;
        let updatedTotalAmount = state.totalAmount + action.payload.quantity * action.payload.price
        
        let cartItemIndex = state.items.findIndex((item:any)=>item.id == action.payload.id);
        
        if(cartItemIndex<0){
            //is not added in cart
            updatedItems = state.items.concat(action.payload);
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }else{
            let itemInCart = state.items[cartItemIndex];
            let updatedItem ={
                ...itemInCart,
                quantity:action.payload.quantity + state.items[cartItemIndex].quantity
            }
            let updatedItems= [...state.items];
            updatedItems[cartItemIndex]=updatedItem;
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }
       
        
        
        
    }
    if(action.type=="REMOVE_ITEM"){
        let updatedItems,updatedTotalAmount,updatedItem;
        let cartItemIndex = state.items.findIndex((item:any)=>item.id == action.payload.id);
        
        let cartItem = state.items[cartItemIndex];
        if(cartItem.quantity==1){
            //just 1 so remove it
            updatedItems = state.items.filter((item:any)=>item.id!=action.payload.id);
            updatedTotalAmount = state.totalAmount - cartItem.price;
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }else{
            //reduce qty by 1
            
            updatedItem={
                ...cartItem,
                quantity:cartItem.quantity-1
            }
            updatedItems=[...state.items]
            updatedItems[cartItemIndex]=updatedItem;
            updatedTotalAmount = state.totalAmount - cartItem.price;
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }
    }
    return defaultCartState;
    
    
}

const CartProvider =(props:any)=>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    
    const addItemHandler =(item:any)=>{
        dispatchCartAction({type:"ADD_ITEM",payload:item})
    }
    const removeItemHandler =(id:any)=>{
        dispatchCartAction({type:"REMOVE_ITEM",payload:id})
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;