import React,{useState} from "react";


const CartContext = React.createContext(
    {
        cartList: [],
        addNewItem: null
    }
)

export default CartContext