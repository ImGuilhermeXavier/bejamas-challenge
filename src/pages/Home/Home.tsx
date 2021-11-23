import api from 'api'
import React, { useState } from 'react'

function Home() {
    const [products, setProducts] = useState()
    React.useEffect(() => {
        async function getProducts() {
            const { data: res } = await api.get('products')
            setProducts(res.data.map((product: any) => product.data))
        }
        getProducts()
    }, [])

    console.log(products)

    return <div></div>
}

export default Home
