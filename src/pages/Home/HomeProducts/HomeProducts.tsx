import React, { useEffect, useState } from 'react'
import ProductInterface from 'interfaces'
import styles from './HomeProducts.module.scss'
import Product from 'components/Product/Product'

import filter from 'static/icons/filter.svg'

interface HomeProductsInterface {
    products: ProductInterface[] | null
}

function HomeProducts({ products }: HomeProductsInterface) {
    const [premium, setPremium] = useState<boolean>(false)

    return (
        <section className={styles.homeProducts}>
            <header className={styles.header}>
                <h2 className={styles.options}>
                    <button
                        className={`${styles.optionButton} ${
                            !premium ? styles.optionSelected : ''
                        }`}
                        onClick={() => setPremium(false)}
                    >
                        Photography
                    </button>
                    /
                    <button
                        className={`${styles.optionButton} ${
                            premium ? styles.optionSelected : ''
                        }`}
                        onClick={() => setPremium(true)}
                    >
                        Premium Photos
                    </button>
                </h2>
                <h3 className={`${styles.options} ${styles.filterDesk}`}>
                    Sort By{' '}
                    <button
                        className={`${styles.optionButton} ${styles.optionButtonSm}`}
                    >
                        Price
                    </button>
                </h3>
                <div className={styles.filter}>
                    <img src={filter} alt="Icon filter" />
                </div>
            </header>

            <section className={styles.products}>
                {products ? (
                    products
                        .filter(({ bestseller }) =>
                            premium ? bestseller : true,
                        )
                        .map((product, index) => (
                            <Product {...product} key={index} />
                        ))
                ) : (
                    <div>Not found...</div>
                )}
            </section>
        </section>
    )
}

export default HomeProducts
