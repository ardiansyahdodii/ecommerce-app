import React from 'react'
import { CardProduct } from '../components/CardProduct'

export const Home = () => {
    return (
        <div className='p-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}
