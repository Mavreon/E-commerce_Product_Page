import React,{useContext} from "react"
import styles from './Cart.module.css'
import CartItem from "./CartItem"
import CartContext from "../../context/cart-context"
import closeIcon from '../../images/icon-close.svg'

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
                        <img src={closeIcon} alt='Next Icon'/>
                    </span>
                </p>
                <div className={styles.cartListBox}>
                <div className={styles.cartList}>
                    {ctx.cartList.length <= 0 && <p>Your cart is empty.</p>}
                    {ctx.cartList.length > 0 && ctx.cartList.map( data => <CartItem key={data.itemID} data = {data}/>)}
                </div>
                {ctx.cartList.length > 0 &&<button className={styles.checkoutBtn}>Checkout</button>}
                </div>
            </div>
        </div>
    )
}

export default Cart;