import React from 'react'
import Product from 'interfaces'
import styles from './HomePresentation.module.scss'
import Button from 'components/Button/Button'

interface HomePresentationInterface {
    featuredProduct: Product
}

function HomePresentation({ featuredProduct }: HomePresentationInterface) {
    return (
        <section className={styles.homePresentation}>
            <div className={styles.imgContent}>
                <h1 className={styles.title}>{featuredProduct.name}</h1>
                <img
                    className={styles.img}
                    src={featuredProduct.image.src}
                    alt={featuredProduct.image.alt}
                />
                <div className={styles.tag}>Photo of the day</div>
            </div>
            <Button className={styles.button} size="lg" buttonType="primary">
                Add to cart
            </Button>

            <section>
                <h2 className={styles.subtitle}>
                    About the {featuredProduct.name}
                </h2>
                <p className={styles.description}>
                    {featuredProduct.details?.description}
                </p>
            </section>

            {featuredProduct.details && (
                <section className={styles.content}>
                    <h2 className={styles.subtitle}>People also buy</h2>
                    <section className={styles.recommendations}>
                        {featuredProduct.details?.recommendations?.map(
                            (recommendation, index) => (
                                <div
                                    className={styles.recommendation}
                                    key={index}
                                >
                                    <img
                                        className={styles.recommendationImg}
                                        src={recommendation.src}
                                        alt={recommendation.alt}
                                    />
                                </div>
                            ),
                        )}
                    </section>

                    <h2 className={styles.subtitle}>Details</h2>
                    <h3 className={styles.infos}>
                        <p>
                            Size:
                            {featuredProduct.details.dimmentions.width}x
                            {featuredProduct.details.dimmentions.height} pixel
                        </p>
                        <p>Size: {featuredProduct.details.size / 1000}mb</p>
                    </h3>
                </section>
            )}
        </section>
    )
}

export default HomePresentation
