import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Wrapper from '../UI/Wrapper'
import Icon from './Icon'
import iconMenu from '../../images/icon-menu.svg'
import iconClose from '../../images/icon-close.svg'
import iconCart from '../../images/icon-cart.svg'
import profileImage from '../../images/image-avatar.png'

const Navbar = ()=>{
    const[navBtnIcon, setNavButtonIcon]= useState(iconMenu)
    const[navbtnClass, setnavBtnClass]= useState(`${styles['navbar__btn']}`)
    const[overlayClass, setoverlayClass]= useState(`${styles['overlay']}`)
    const[navLinksClass, setNavLinksClass]= useState(`${styles['navbar__links']}`)
    const [active, setActive] = useState(false)

    const onClickNavBtnHandler = ()=>{
        setActive((prevState)=> !prevState)
        if(!active)
        {
            setNavButtonIcon(iconClose)
            setnavBtnClass(`${styles['navbar__btn--active']}`)
            setoverlayClass(`${styles['overlay--active']}`)
            setNavLinksClass(`${styles['navbar__links--active']}`)
        }
        else
        {
            setNavButtonIcon(iconMenu)
            setnavBtnClass(`${styles['navbar__btn']}`)
            setoverlayClass(`${styles['overlay']}`)
            setNavLinksClass(`${styles['navbar__links']}`)
        }
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
            <Wrapper style={{gap: '3.6rem'}}>
                <Icon iconImage={iconCart} iconDescription='Cart Icon'/>
                <img className={styles['navbar__profile-image']} src={profileImage} alt="Avatar"/>
            </Wrapper>
        </nav>
    )
}

export default Navbar