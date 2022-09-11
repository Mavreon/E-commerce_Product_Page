import React,{useState, Fragment} from "react";
import ReactDOM from "react-dom"
import styles from './Lightbox.module.css'
import SubImageList from "../Product/SubImageList";
import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'
import closeIcon from '../../images/icon-close.svg'

const Lightbox = (props)=>{
    const [mainImageIndex, setMainImageIndex]=useState(0)
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
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <div className={styles['product-image-section']}>
                <div className={styles.overlay}/>
                <div className={styles.container}>
                    <div className={styles['main-image']}>
                        
                        {/* Close Button */}
                        <div 
                        className={styles['close-btn']} 
                        onClick={props.closeHandler}>
                            <img src={closeIcon} alt='Next Icon'/>
                        </div>
                        
                        {/* Next Button */}
                        <div 
                        className={styles['next-btn']} 
                        onClick={nextBtnClickHandler}>
                            <img src={nextIcon} alt='Next Icon'/>
                        </div>
                        
                        {/* Image */}
                        <img className={styles.image} src={props.productImageList[mainImageIndex]} alt='Sneakers'/>
                        
                        {/* Previous Button */}
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
            </div>,
            document.getElementById('lightbox'))}
        </React.Fragment>
      
    )
}

export default Lightbox;