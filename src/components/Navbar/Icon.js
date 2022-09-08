import React from 'react'
import styles from './Icon.module.css'

const Icon = (props)=>{
    return (
        <img src={props.iconImage} alt={props.iconDescription}/>
        // <div className={styles.icon} style={{...props.style}}>
            
        // </div>
    )
}

export default Icon;