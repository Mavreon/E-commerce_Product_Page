import React,{useContext} from "react";
import styles from './Cart.module.css'
import CartItem from "./CartItem"
import CartContext from "../../context/cart-context";

const Cart = ()=>{
    const ctx = useContext(CartContext)
    return(
        <div className={styles.parent}>
            <div className={styles.container}>
                <p className={styles.header}>Cart</p>
                <div className={styles.cartListBox}>
                <div className={styles.cartList}>
                    {ctx.cartList.length <= 0 && <p>Your cart is empty.</p>}
                    {ctx.cartList.length > 0 && ctx.cartList.map( data => <CartItem key={data.productKey} data = {data}/>)}
                </div>
                {ctx.cartList.length > 0 &&<button className={styles.checkoutBtn}>Checkout</button>}
                </div>
            </div>
        </div>
    )
}

export default Cart;