import React from 'react';
import styles from './Product.module.css'
import ProductImageBox from './ProductImageBox';
import ProductInfo from './ProductInfo';
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'

const Product = ()=>{
    const productData = {
        company: 'Sneakers Comapny',
        images: [product1,product2, product3,product4],
        name: 'Sneakers',
        title: "Fall Limited Edition",
        summary:`These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.`,
        unitPrice: 250,
        percentOff: 50
    }

    return(
        <div className={styles.product}>
            <ProductImageBox 
            productImageList={productData.images}/>
            <ProductInfo productData={productData}/>
        </div>
    )
}

export default Product;