import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props)=>{
    const[cartList, setCartList] = useState([])
    const addNewItem = (item)=>{
        setCartList(previousCartList => [...previousCartList, item])
    }
    return(
        <CartContext.Provider 
        value=
        {
            {
                cartList: cartList,
                addNewItem: addNewItem
            }
        }>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider