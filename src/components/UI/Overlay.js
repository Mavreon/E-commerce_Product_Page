import React from "react";
import styles from './Overlay.module.css'

const Overlay=(props)=>{
    return <div className={styles[props.className]}  />
}

export default Overlay