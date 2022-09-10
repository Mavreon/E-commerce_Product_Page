import React from 'react';
import styles from './SubImage.module.css'

const SubImage = (props)=>{
    const onClickSubImageHandler=()=>{
       props.setMainImageRef(props.index)
    }
    return(
        <div className={styles[props.className]} onClick={onClickSubImageHandler}>
            <img src={props.imageRef} alt='Sneakers'/>
        </div>
    )
}

export default SubImage;