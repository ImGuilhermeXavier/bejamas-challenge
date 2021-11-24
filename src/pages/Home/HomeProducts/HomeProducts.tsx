import React from 'react'
import styles from './HomeProducts.module.scss'

function HomeProducts() {
    return (
        <section className={styles.homeProducts}>
            <header className={styles.header}>
                <h2>Photography / Premium Photos</h2>
                <h3>Sort By Price</h3>
            </header>
        </section>
    )
}

export default HomeProducts
