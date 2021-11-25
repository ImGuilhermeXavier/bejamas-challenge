import React from 'react'
import styles from './Product.module.scss'
import ProductInterface from 'interfaces'
import Button from 'components/Button/Button'
import { GlobalContext } from 'GlobalContext'
import useToast from 'hooks/useToast'

function Product({
    name,
    category,
    currency,
    price,
    image,
    bestseller,
    featured,
}: ProductInterface) {
    const { addProductToCart } = React.useContext(GlobalContext)
    const toast = useToast()

    function addProduct() {
        addProductToCart({
            name,
            price,
            currency,
            image,
            bestseller,
            category,
            featured,
        })
        toast.success(`${name} has been add to Cart`)
    }

    return (
        <section className={styles.card}>
            <div className={styles.cardImageArea}>
                {bestseller && (
                    <div className={styles.bestSeller}>Best seller</div>
                )}
                <img
                    className={styles.image}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                />
                <Button
                    className={styles.btn}
                    onClick={addProduct}
                    buttonType="primary"
                    size="md"
                >
                    Add to cart
                </Button>
            </div>
            <p className={styles.category}>{category}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>
                {currency && `$`}
                {price}
            </p>
        </section>
    )
}

export default Product
