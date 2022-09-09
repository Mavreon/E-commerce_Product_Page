import React from "react";
import styles from './ProductImageBox.module.css'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import productThumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import SubImageList from "./SubImageList";

const ProductImageBox = ()=>{
    const productImageList = [
        product1,
        product2,
        product3,
        product4
    ]
    const productImageThumbnailList = [
        productThumbnail1,
        productThumbnail2,
        productThumbnail3,
        productThumbnail4
    ]
    return(
        <div className={styles['product-image-section']}>
            <div className={styles.container}>
                <div className={styles['main-image']}>
                    <img src={productImageList[0]} alt='Sneakers'/>
                </div>
                <SubImageList data={productImageThumbnailList}/>
            </div>
        </div>
    )
}

export default ProductImageBox;