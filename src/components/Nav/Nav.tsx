import React, { useState } from 'react'
import logo from 'static/logos/bejamas.svg'
import marketCarIcon from 'static/icons/market-car-icon.svg'
import styles from './Nav.module.scss'
import { GlobalContext } from 'GlobalContext'
import BottomSheet from 'components/BottomSheet/BottomSheet'
import Button from 'components/Button/Button'

function Nav() {
    const { cartProducts, clearAllCart } = React.useContext(GlobalContext)
    const [cartBottomSheet, setCartBottomSheet] = useState(false)

    return (
        <nav className={styles.nav}>
            <div>
                <img className={styles.bejamas} src={logo} alt="Logo Bejamas" />
            </div>
            <div className={styles.cartArea}>
                <img
                    className={styles.marketCar}
                    src={marketCarIcon}
                    alt="Market car"
                    onClick={() => setCartBottomSheet(true)}
                />
                {cartProducts && (
                    <div className={styles.cartCount}>
                        {cartProducts.length}
                    </div>
                )}
            </div>

            {cartBottomSheet && (
                <BottomSheet
                    className={styles.bottomSheet}
                    isOpen={cartBottomSheet}
                    handleClose={() => setCartBottomSheet(false)}
                >
                    <div className={styles.products}>
                        {cartProducts.map(({ name, price, image }, index) => (
                            <section className={styles.product} key={index}>
                                <div className={styles.infos}>
                                    <p className={styles.name}>{name}</p>
                                    <p
                                        className={styles.price}
                                    >{`$${price}`}</p>
                                </div>
                                <img
                                    className={styles.image}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </section>
                        ))}
                    </div>
                    <div className={styles.divider}></div>
                    <Button
                        buttonType="aux"
                        size="md"
                        onClick={() => clearAllCart()}
                    >
                        Clear
                    </Button>
                </BottomSheet>
            )}
        </nav>
    )
}

export default Nav
