import React from 'react';
import styles from './SubImage.module.css'

const SubImage = (props)=>{
    return(
        <div className={styles['sub-image']}>
            <img src={props.image} alt='Sneakers'/>
        </div>
    )
}

export default SubImage;