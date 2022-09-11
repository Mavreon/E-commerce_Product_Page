import React,{useState} from "react";
import styles from './ProductImageBox.module.css'
import SubImageList from "./SubImageList";
import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'
import Lightbox from "../Lightbox/Lightbox";

const ProductImageBox = (props)=>{
    const [mainImageIndex, setMainImageIndex]=useState(0)
    const [showLightbox, setShowLightbox] = useState(false)
    const nextBtnClickHandler = ()=>{
        // console.log('clicked')
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
    const onMainImageClickHandler=()=>{
        setShowLightbox((prevState)=> !prevState)
    }
    return(
        <div className={styles['product-image-section']}>
            <div className={styles['main-image']}>
                <div 
                className={styles['next-btn']} 
                onClick={nextBtnClickHandler}>
                    <img src={nextIcon} alt='Next Icon'/>
                </div>
                <img onClick={onMainImageClickHandler} src={props.productImageList[mainImageIndex]} alt='Sneakers'/>
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
            {showLightbox && <Lightbox closeHandler={onMainImageClickHandler} productImageList={props.productImageList} />}
        </div>
    )
}

export default ProductImageBox;