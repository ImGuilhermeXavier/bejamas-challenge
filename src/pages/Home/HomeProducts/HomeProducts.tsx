import React, { useEffect, useState } from 'react'
import ProductInterface from 'interfaces'
import styles from './HomeProducts.module.scss'
import Product from 'components/Product/Product'

import filter from 'static/icons/filter.svg'
import arrow from 'static/icons/arrow.svg'

interface HomeProductsInterface {
    products: ProductInterface[] | null
}

function HomeProducts({ products }: HomeProductsInterface) {
    const [customProducts, setCustomProducts] = useState<
        ProductInterface[] | null
    >(products)
    const [premium, setPremium] = useState(false)
    const [desc, setDesc] = useState(false)
    const [sortType, setSortType] = useState<'price' | null>(null)

    function sortBy(type: 'price', isDesc: boolean) {
        setDesc(isDesc)
        setSortType(type)
    }

    useEffect(() => {
        if (!products) return
        const customProducts = products
            .filter(({ bestseller }) => (premium ? bestseller : true))
            .sort((a, b) =>
                sortType
                    ? desc
                        ? a[sortType] - b[sortType]
                        : b[sortType] - a[sortType]
                    : 1,
            )
        setCustomProducts(customProducts)
    }, [products, premium, sortType, desc])

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
                <h3 className={`${styles.sort} ${styles.filterDesk}`}>
                    Sort By{' '}
                    <button
                        className={`${styles.optionButton} ${
                            styles.optionButtonSm
                        } ${sortType ? '' : styles.optionButtonDisabled}`}
                        onClick={() => sortBy('price', !desc)}
                    >
                        Price
                        <img
                            className={`${styles.iconSort} ${
                                desc ? styles.iconSortDesc : ''
                            }`}
                            src={arrow}
                            alt="Arrow icon"
                        />
                    </button>
                </h3>
                <div className={styles.filter}>
                    <img src={filter} alt="Filter icon" />
                </div>
            </header>

            <section className={styles.products}>
                {customProducts ? (
                    customProducts.map((product, index) => (
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
