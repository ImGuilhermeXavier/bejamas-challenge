import React, { useEffect, useState } from 'react'
import ProductInterface from 'interfaces'
import styles from './HomeProducts.module.scss'
import Product from 'components/Product/Product'

interface HomeProductsInterface {
    products: ProductInterface[] | null
}

function HomeProducts({ products }: HomeProductsInterface) {
    const [premium, setPremium] = useState<boolean>(false)

    useEffect(() => {
        console.log('change Best seller')
    }, [premium])

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
                    </button>{' '}
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
                <h3 className={styles.options}>
                    Sort By{' '}
                    <button
                        className={`${styles.optionButton} ${styles.optionButtonSm}`}
                    >
                        Price
                    </button>
                </h3>
            </header>

            <section className="category"></section>
            <section className={styles.products}>
                {products ? (
                    products.map((product, index) => (
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
