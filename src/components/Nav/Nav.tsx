import React from 'react'
import logo from 'static/logos/bejamas.svg'
import marketCarIcon from 'static/icons/market-car-icon.svg'
import styles from './Nav.module.scss'

function Nav() {
    return (
        <nav className={styles.nav}>
            <img className={styles.bejamas} src={logo} alt="Logo Bejamas" />
            <img
                className={styles.marketCar}
                src={marketCarIcon}
                alt="Market car"
            />
        </nav>
    )
}

export default Nav
