import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../services/api'
import { useParams } from 'react-router-dom'
import { Button } from '../components/elements/Button'

export const DetailProduct = () => {
    const { productId } = useParams()
    // console.log(id)
    const [product, setProduct] = useState([])
    const [rating, setRating] = useState([])

    useEffect(() => {
        getSingleProduct(productId)
            .then((result) => {
                setProduct(result.data)
                setRating(result.data.rating)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [productId])

    console.log(product);
    return (
        <div className='relative p-10 flex space-x-10'>
            <div className='flex justify-center items-center w-1/2 border-2 p-2'>
                <img src={product.image} alt="" width={350} height={400} />
            </div>

            <div className='w-1/2'>
                <h1 className='text-3xl font-bold'>{product.title}</h1>
                <p className='mt-3 font-medium w-fit'>⭐ {rating.rate} ({rating.count})</p>
                <h1 className='mt-5 text-2xl font-bold'>$ {product.price}</h1>
                <p className='mt-5 text-md'>{product.description}</p>

                <Button text='Add to cart' className='mt-10 me-5 bg-gray-500 float-end'/>
            </div>
        </div>
    )
}
