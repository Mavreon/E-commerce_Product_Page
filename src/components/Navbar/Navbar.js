import React from 'react'
import styles from './Navbar.module.css'
import Wrapper from '../UI/Wrapper'
import iconMenu from '../../images/icon-menu.svg'

const Navbar = ()=>{
    return(
        <nav className={`${styles.navbar}`}>
            <Wrapper style={{gap: '6rem'}}>
            <Wrapper>
                <div className={`${styles['navbar__btn']}`}><img src={iconMenu} alt='Sneakers Logo'/></div>
                <h1 className={`${styles['navbar__logo']}`}>sneakers</h1>
            </Wrapper>
            <ul className={`${styles['navbar__links']}`}>
                <li className={`${styles['navbar__link']}`}><a href='/'>Collections</a></li>
                <li className={`${styles['navbar__link']}`}><a href='/'>Men</a></li>
                <li className={`${styles['navbar__link']}`}><a href='/'>Women</a></li>
                <li className={`${styles['navbar__link']}`}><a href='/'>About</a></li>
                <li className={`${styles['navbar__link']}`}><a href='/'>Contact</a></li>
            </ul>
            </Wrapper>
        </nav>
    )
}

export default Navbar