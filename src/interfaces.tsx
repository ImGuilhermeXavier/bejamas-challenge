export default interface Product {
    name: string
    category: string
    price: number
    currency: string
    image: {
        src: string
        alt: string
    }
    bestseller: boolean
    featured: boolean
    details?: {
        description: string
        dimmentions: {
            width: number
            height: number
        }
        size: number
        recommendations: {
            src: string
            alt: string
        }[]
    }
}
