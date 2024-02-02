import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CardProduct = (props) => {

    return (
        <div className='relative p-2 border-2'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center p-2 w-48 md:w-52 lg:w-72 h-52 lg:h-56'>
                    <img src={props.image} alt="" width={120} height={120} className='object-cover self-center ' />
                </div>
                <div className='p-3'>
                    <Link to={`/product/${props.id}`} className='text-xl font-semibold hover:text-gray-700'>{props.title}</Link>
                    <p className='mt-3'>{String(props.description).substring(0, 50) + ' ...'}</p>
                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-lg font-semibold'>$ {props.price}</p>
                        <FaCartPlus className='text-2xl' />
                    </div>
                </div>
                <div className='absolute top-0 left-0 p-1 px-2 m-2 bg-yellow-500 rounded-md'>
                    {props.rating}
                </div>
            </div>

        </div>
    )
}
