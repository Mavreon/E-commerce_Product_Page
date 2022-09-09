import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Wrapper from '../UI/Wrapper'
import Icon from './Icon'
import iconMenu from '../../images/icon-menu.svg'
import iconClose from '../../images/icon-close.svg'
import iconCart from '../../images/icon-cart.svg'
import profileImage from '../../images/image-avatar.png'
import Cart from '../Cart/Cart'

const Navbar = ()=>{
    const[navBtnIcon, setNavButtonIcon]= useState(iconMenu)
    const[navbtnClass, setnavBtnClass]= useState(`${styles['navbar__btn']}`)
    const[overlayClass, setoverlayClass]= useState(`${styles['overlay']}`)
    const[navLinksClass, setNavLinksClass]= useState(`${styles['navbar__links']}`)
    const[isMobileNavActive, setIsMobileNavActive] = useState(false)
    const[isCartActive, setIsCartActive] = useState(false)

    const onClickNavBtnHandler = ()=>{
        setIsMobileNavActive(prevState => !prevState)
        // When navbar is active(Mobile)...
        if(!isMobileNavActive)
        {
            setNavButtonIcon(iconClose)
            setnavBtnClass(`${styles['navbar__btn--active']}`)
            setoverlayClass(`${styles['overlay--active']}`)
            setNavLinksClass(`${styles['navbar__links--active']}`)
        }
        // When navbar is inactive(Mobile)...
        else
        {
            setNavButtonIcon(iconMenu)
            setnavBtnClass(`${styles['navbar__btn']}`)
            setoverlayClass(`${styles['overlay']}`)
            setNavLinksClass(`${styles['navbar__links']}`)
        }
    }

    const onClickCartIcon = ()=>{
        setIsCartActive(prevState => !prevState)
        console.log("Clicked")
    }

    return(
        <nav className={`${styles.navbar}`}>
            <Wrapper style={{gap: '6rem'}}>
                <Wrapper>
                    <div className={navbtnClass} onClick={onClickNavBtnHandler}><img src={navBtnIcon} alt='Menu Icon'/></div>
                    <h1 className={`${styles['navbar__logo']}`}>sneakers</h1>
                </Wrapper>
                <div className={overlayClass}/>
                <ul className={navLinksClass}>
                    <li className={`${styles['navbar__link']}`}><a href='#'>Collections</a></li>
                    <li className={`${styles['navbar__link']}`}><a href='#'>Men</a></li>
                    <li className={`${styles['navbar__link']}`}><a href='#'>Women</a></li>
                    <li className={`${styles['navbar__link']}`}><a href='#'>About</a></li>
                    <li className={`${styles['navbar__link']}`}><a href='#'>Contact</a></li>
                </ul>
            </Wrapper>
            <Wrapper style={{gap: '3.2rem',}}>
                <Icon iconImage={iconCart} iconDescription='Cart Icon' onClick={onClickCartIcon}/>
                {isCartActive===true && <Cart/>}
                <img className={styles['navbar__profile-image']} src={profileImage} alt="Avatar"/>
            </Wrapper>
        </nav>
    )
}

export default Navbar