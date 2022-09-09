import React from 'react';
import styles from './Product.module.css'
import ProductImageBox from './ProductImageBox';
import ProductInfo from './ProductInfo';

const Product = ()=>{
    return(
        <div className={styles.product}>
            <ProductImageBox/>
            <ProductInfo/>
        </div>
    )
}

export default Product;