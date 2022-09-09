import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import styles from './Icon.module.css'

const Icon = (props)=>{
    const ctx = useContext(CartContext);
    return (
        <React.Fragment>
            <div className= {styles.cart}style={{...props.style}} onClick={props.onClick}>
                {ctx.cartList.length > 0 && <div className={styles.cartInfo}>{ctx.cartList.length}</div>}
                <img className={styles.icon} src={props.iconImage} alt={props.iconDescription}/>
            </div>
            
        </React.Fragment>
    )
}

export default Icon;