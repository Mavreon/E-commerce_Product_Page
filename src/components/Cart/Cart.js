import React,{useContext, useState} from "react";
import styles from './Cart.module.css'
import CartItem from "./CartItem"
import CartContext from "../../context/cart-context";
import closeIcon from '../../images/icon-plus.svg'

const Cart = (props)=>{
    const ctx = useContext(CartContext)
    const onClickCloseBtn = ()=>{
        props.closeHandler()
    }
    return(
        <div className={styles.parent}>
            <div className={styles.container}>
                <p className={styles.header}>
                    Cart
                    <span className={styles['close-btn']} onClick={onClickCloseBtn}>
                        X
                    </span>
                </p>
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