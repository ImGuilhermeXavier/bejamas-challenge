import React, { useEffect } from 'react'
import Product from 'interfaces'
import styles from './HomePresentation.module.scss'

interface HomePresentationInterface {
    featuredProduct: Product
}

function HomePresentation({ featuredProduct }: HomePresentationInterface) {
    useEffect(() => {
        console.log(featuredProduct)
    }, [featuredProduct])

    return (
        <section>
            <h1 className={styles.title}>{featuredProduct.name}</h1>
            <div className={styles.imgContent}>
                <img
                    className={styles.img}
                    src={featuredProduct.image.src}
                    alt={featuredProduct.image.alt}
                />
                <div className={styles.tag}>Photo of the day</div>
            </div>
            <button>Add to cart</button>

            <h2 className={styles.subtitle}>
                About the {featuredProduct.name}
            </h2>
            <p className={styles.description}>
                {featuredProduct.details?.description}
            </p>

            {featuredProduct.details && (
                <>
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
                </>
            )}
        </section>
    )
}

export default HomePresentation
