import React, { useEffect, useState } from 'react'
import { CardProduct } from '../components/CardProduct'
// import { getAllProduct, getProductByCategory } from '../services/api'
import { dataCategory } from '../services/data'
import { Button } from '../components/elements/Button'
import { useNavigate } from 'react-router-dom'
import {useProductStore} from '../store/productStore'

export const Home = (props) => {
    const navigate = useNavigate()
    // const [products, setProducts] = useState([])
    const {products, getAllProduct, getProductByCategory, changeCategoryValue, categoryValue} = useProductStore()
    // const [categoryValue, setCategoryValue] = useState('')

    useEffect(() => {
        if (!categoryValue) {
            getAllProduct()
            navigate('?category=all')
        } else {
            getProductByCategory(categoryValue)
            navigate(`?category=${categoryValue}`)
        }

    }, [categoryValue])

    // console.log(products);

    return (
        <div className='p-5'>
            <div className='flex justify-center space-x-3'>
                {dataCategory.map((category) => (
                    <Button key={category.id} text={category.name} onClick={() => changeCategoryValue(category.value)} className={categoryValue === category.value ? 'bg-gray-700 text-white' : ''} />
                ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} carts={props.carts} setCarts={props.setCarts}/>
                ))}
            </div>
        </div>
    )
}
