import React from "react";
import styles from './ProductInfo.module.css'
import plusIcon from '../../images/icon-plus.svg'
import minusIcon from '../../images/icon-minus.svg'
import cartIcon from '../../images/icon-cart.svg'

const ProductInfo=()=>{
    return(
        <div className={styles['product__info-container']}>
            <span className={styles['product-company']}>Sneaker Company</span>
            <h2 className={styles['product-title']}>
                Fall Limited Edition
                <span>Sneakers</span>
            </h2>
            <p className={styles['product-summary']}>
                These low-profile sneakers are perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className={styles['pricing-details']}>
                <span className={styles['current-price']}>
                    $125.00
                    <span className={styles['discount']}>50%</span>
                </span>
                <span className={styles['original-price']}>$250</span>
            </div>
            <div className={styles['modify-section']}>
                <div className={styles.counter}>
                    <img src={minusIcon} alt='Minus Icon'/>
                    <p>0</p>
                    <img src={plusIcon} alt='Plus Icon'/>
                </div>
                <button className={styles['add-btn']}>
                    <img src={cartIcon} alt='Cart Icon'/>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo