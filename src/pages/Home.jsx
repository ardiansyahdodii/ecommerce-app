import React, { useEffect, useState } from 'react'
import { CardProduct } from '../components/CardProduct'
import { getAllProduct } from '../services/api'

export const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProduct()
            .then((result) => {
                setProducts(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(products);

    return (
        <div className='p-5'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {products.map((product) => (
                    <CardProduct key={product.id} title={product.title} description={product.description} price={product.price} image={product.image} rating={product.rating.rate} />
                ))}
            </div>
        </div>
    )
}
