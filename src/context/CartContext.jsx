import { Children, createContext, useState } from "react";
import { useContext } from "react";

const CartContext= createContext();

export const CartProvider=({children})=>{

    const[cart,setCart]= useState([]);

    const addToCart=(product)=>{
  setCart((prevCart)=>{
    const existingItem= prevCart.find((item)=>item.id===product.id);

    if (existingItem){
        return prevCart.map((item)=>
        item.id===product.id ?{...item, quantity:item.quantity+1}:item);
    }
    return[...prevCart,{...product, quantity:1}];
  })
    };

    //Decrease quantity
    const decreaseQuantity=(id)=>{
        setCart ((prevCart)=>{
            const existingItem=prevCart.find((item)=>item.id===id);

            if(existingItem.quantity===1){
                return prevCart.filter((item)=>item.id !==id);
            }

            return prevCart.map((item)=>
            item.id=== id?{...item,quantity: item.quantity-1}:item)
        });
    }

    //Remove Items from Cart
    const removeFromCart=(id)=>{
        setCart((prevCart)=>prevCart.filter((item)=> item.id !== id));
    }
    
    return(
        <CartContext.Provider value={{cart,decreaseQuantity,addToCart,removeFromCart}}>
        {children}
        </CartContext.Provider>
    );
}

export const useCart=()=> useContext(CartContext);