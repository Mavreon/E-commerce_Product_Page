import React from 'react';
import styles from './Product.module.css'
import ProductImageBox from './ProductImageBox';
import ProductInfo from './ProductInfo';

const Product = (props)=>{
    const productData = props.productData

    return(
        <div className={styles.product}>
            <ProductImageBox 
            productImageList={productData.images}/>
            <ProductInfo productData={productData}/>
        </div>
    )
}

export default Product;