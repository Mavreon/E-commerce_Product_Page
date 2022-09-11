import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props)=>{
    const [cartId, setCartId] = useState(0)
    const[cartList, setCartList] = useState([])
    const addNewItem = (newItem)=>{
        // Check if item exists on cart list by title comparison...
        const newList = cartList.filter(
            (item)=> item.productTitle !== newItem.productTitle
        )
        // Set cart list...
        setCartList(newList)
        // Then add modified new item now the previous alteration has been deleted...
        setCartList(previousCartList => {
            setCartId(prevId=> ++prevId)
            return [...previousCartList, {itemID: cartId,...newItem}]
        })
    }
    const removeItem = (itemID)=>{
        const newList = cartList.filter((item)=> item.itemID !== itemID)
        setCartList(newList)
    }
    return(
        <CartContext.Provider 
        value=
        {
            {
                cartList: cartList,
                addNewItem: addNewItem,
                removeItem: removeItem
            }
        }>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider