import React,{useContext} from "react";
import styles from './CartItem.module.css'
import iconDelete from '../../images/icon-delete.svg'
import CartContext from "../../context/cart-context";

const CartItem=(props)=>{
    const data = props.data
    const ctx = useContext(CartContext)
    const onClickDelete=()=>{
        ctx.removeItem(data.itemID)
        // console.log(data.itemID)
    }
    return(
        <div className={styles.cartItem}>
            <img className={styles.productImage} src={data.productImage} alt="Product"/>
            <p className={styles.productDescription}>
                {data.productTitle}
                <span>
                    {`$${(props.data.productPrice).toFixed(2)} x ${data.productCount} `} 
                    <b>{`$${(data.productPrice * data.productCount).toFixed(2)}`}</b>
                </span>
            </p>
            <img 
            className={styles.iconDelete} 
            src={iconDelete} 
            alt="Delete Icon" 
            onClick={onClickDelete}/>
        </div>
    )
}

export default CartItem