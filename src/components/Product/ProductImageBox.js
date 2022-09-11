import React,{useState} from "react";
import styles from './ProductImageBox.module.css'
import SubImageList from "./SubImageList";
import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'

const ProductImageBox = (props)=>{
    // const productImageList = [
    //     product1,
    //     product2,
    //     product3,
    //     product4,
    // ]
    const [mainImageIndex, setMainImageIndex]=useState(0)
    const nextBtnClickHandler = ()=>{
        console.log('clicked')
        if(mainImageIndex < props.productImageList.length-1)
        {
            setMainImageIndex((prevIndex)=> ++prevIndex)
        }
    }
    const prevBtnClickHandler = ()=>{
        if(mainImageIndex > 0)
        {
            setMainImageIndex((prevIndex)=> --prevIndex)
        }
    }
    return(
        <div className={styles['product-image-section']}>
            <div className={styles['main-image']}>
                <div 
                className={styles['next-btn']} 
                onClick={nextBtnClickHandler}>
                    <img src={nextIcon} alt='Next Icon'/>
                </div>
                <img src={props.productImageList[mainImageIndex]} alt='Sneakers'/>
                <div 
                className={styles['previous-btn']} 
                onClick={prevBtnClickHandler}>
                    <img src={previousIcon} alt='Previous Icon'/>
                </div>
            </div>
            <SubImageList 
            data={props.productImageList} 
            setMainImageIndex = {setMainImageIndex}
            />
        </div>
    )
}

export default ProductImageBox;