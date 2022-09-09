import React from "react";
import SubImage from "./SubImage";
import styles from './SubImageList.module.css'

const SubImageList = (props)=>{
    const imageData = props.data;
    return(
        <div className={styles['sub-images']}>
            {imageData.map((data)=> <SubImage image={data}/>)}
        </div>
    )
}

export default SubImageList;