import React,{useState} from "react";
import SubImage from "./SubImage";
import styles from './SubImageList.module.css'

const SubImageList = (props)=>{
    const imageData = props.data;
    const [subImageClasses, setSubImageClasses] = useState([
        `sub-image-active`, `sub-image`,`sub-image`,`sub-image`
    ])
    let i = -1;
    const subImageData = imageData.map((data)=>{
        i++
        return {
            imageRef: data,
            className: subImageClasses[i]
        }
    })
    const setMainImageRef = (index)=>{
        setSubImageClasses((prevState)=>{
            prevState = [`sub-image`,`sub-image`,`sub-image`,`sub-image`]
            prevState[index]=`sub-image-active`
            return (prevState)
        })
        props.setMainImageIndex(index);
    }
    return(
        <div className={styles['sub-images']}>
            {subImageData.map((data)=> 
            <SubImage 
            imageRef={data.imageRef} 
            className = {data.className} 
            key={subImageData.indexOf(data)}
            index={subImageData.indexOf(data)}
            setMainImageRef = {setMainImageRef}
            />)}
        </div>
    )
}

export default SubImageList;