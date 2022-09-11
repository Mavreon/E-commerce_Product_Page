import React,{useState,useContext} from "react";
import styles from './ProductInfo.module.css'
import plusIcon from '../../images/icon-plus.svg'
import minusIcon from '../../images/icon-minus.svg'
import cartIcon from '../../images/icon-cart.svg'
import CartContext from "../../context/cart-context";

const ProductInfo=(props)=>{
    const productData = props.productData
    const ctx = useContext(CartContext)
    const [amount, setAmount] = useState(1)
    const increaseBtnClickHandler = ()=>{
        setAmount((prevIndex)=> ++prevIndex)
    }
    const decreaseBtnClickHandler = ()=>{
        if(amount > 1)
        {
            setAmount((prevIndex)=> --prevIndex)
        }
    }
    const onClickAddToCart = ()=>{
        // console.log('Added to cart')
        const cartData = {
            productImage : productData.images[0],
            productTitle : `${productData.title} Sneakers`,
            productCount : amount,
            productPrice : productData.unitPrice * (productData.percentOff/100)
        }
        ctx.addNewItem(cartData);
        setAmount(1)
    }
    return(
        <div className={styles['product__info-container']}>
            <span className={styles['product-company']}>{productData.company}</span>
            <h2 className={styles['product-title']}>
                {productData.title}
                <span>Sneakers</span>
            </h2>
            <p className={styles['product-summary']}>
               {productData.summary}
            </p>
            <div className={styles['pricing-details']}>
                <span className={styles['current-price']}>
                    {`$${(productData.unitPrice * (productData.percentOff/100)).toFixed(2)}`}
                    <span className={styles['discount']}>{`${productData.percentOff}%`}</span>
                </span>
                <span className={styles['original-price']}>
                {`$${(productData.unitPrice).toFixed(2)}`}
                </span>
            </div>
            <div className={styles['modify-section']}>
                <div className={styles.counter}>
                    <img className={styles['minus-icon']} src={minusIcon} alt='Minus Icon' onClick={decreaseBtnClickHandler}/>
                    <p className={styles['amount-input']}>{amount}</p>
                    <img className={styles['plus-icon']} src={plusIcon} alt='Plus Icon' onClick={increaseBtnClickHandler}/>
                </div>
                <button className={styles['add-btn']} onClick={onClickAddToCart}>
                    <img src={cartIcon} alt='Cart Icon'/>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo