import React from 'react'
import styles from './Product.module.scss'
import ProductInterface from 'interfaces'
import Button from 'components/Button/Button'

function Product({ name, category, currency, price, image }: ProductInterface) {
    return (
        <section className={styles.card}>
            <div className={styles.cardImageArea}>
                <img className={styles.image} src={image.src} alt={image.alt} />
                <Button buttonType="primary" size="md">
                    Add to cart
                </Button>
            </div>
            <p className={styles.category}>{category}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>
                {currency}
                {price}
            </p>
        </section>
    )
}

export default Product
