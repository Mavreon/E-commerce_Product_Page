import React from "react";
import styles from './CartItem.module.css'
import iconDelete from '../../images/icon-delete.svg'

const CartItem=(props)=>{
    return(
        <div className={styles.cartItem}>
            <img className={styles.productImage} src={props.data.productImage} alt="Product"/>
            <p className={styles.productDescription}>
                {props.data.productDescription}
                <span>
                    {`$${(props.data.productUnitPrice).toFixed(2)} x ${props.data.productCount}`} <b>{`$${(props.data.productUnitPrice * props.data.productCount).toFixed(2)}`}</b>
                </span>
            </p>
            <img className={styles.iconDelete} src={iconDelete} alt="Delete Icon"/>
        </div>
    )
}

export default CartItem