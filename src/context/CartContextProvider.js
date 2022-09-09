import React,{useState} from "react";
import CartContext from "./cart-context";
// import product from '../images/image-product-1-thumbnail.jpg'

// const list = [
//     {
//         productKey: 1,
//         productImage: product,
//         productDescription: "Autumn Limited Edition...",
//         productUnitPrice: 125,
//         productCount: 3,
//     }
// ]
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