import React, {useState,useRef} from "react";
import styles from './Navbar.module.css';
import cartIcon from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import menuIcon from '../../images/icon-menu.svg';
import closeIcon from '../../images/icon-close.svg';

const Navbar = (props)=>{
    const navBtnRef = useRef();
    const [backdropClasses, setBackdropClasses] = useState(styles.backdrop);
    const [navbarClasses, setNavbarClasses] = useState(styles.navbar);
    const [isClicked, setIsClicked] = useState(false);

    const onClickNavButtonHandler = ()=>{
        if(!isClicked)
        {
            setIsClicked(true);
            navBtnRef.current.src = closeIcon;
            setBackdropClasses(`${styles.backdrop} ${styles.active}`);
            setNavbarClasses(`${styles.navbar} ${styles.active}`);
        }
        else{
            setIsClicked(false);
            navBtnRef.current.src = menuIcon;
            setBackdropClasses(`${styles.backdrop}`);
            setNavbarClasses(`${styles.navbar}`);
        }
    }

    return(
        <header className={styles.header}>
            <div className={styles["nav-btn"]}>
                <img className={styles["nav-btn__open"]} src={menuIcon} onClick={onClickNavButtonHandler} ref={navBtnRef}/>
            </div>
            <div className={`${backdropClasses}`}/>
            <h2 className={styles.logo}>Sneakers</h2>
            <nav className={navbarClasses}>
                <ul className={styles["nav-links"]}>
                    <li><a className={styles["nav-link"]} href="#">Collection</a></li>
                    <li><a className={styles["nav-link"]} href="#">Men</a></li>
                    <li><a className={styles["nav-link"]} href="#">Women</a></li>
                    <li><a className={styles["nav-link"]} href="#">About</a></li>
                    <li><a className={styles["nav-link"]} href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.profile}>
                <div className={styles.cart}>
                    <span className={`${styles.count} ${styles.active}`}>1</span>
                    <img className={styles["cart-icon"]} src = {cartIcon}/>
                </div>
                <div className={styles["profile-image"]}><img src={avatar}/></div>
            </div>
        </header>
    );
}

export default Navbar;