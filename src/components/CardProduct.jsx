import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export const CardProduct = (props) => {

    const text = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'

    return (
        <div className='relative p-2 border-2'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center p-2 w-48 md:w-52 lg:w-72 h-52 lg:h-56'>
                    <img src={props.image} alt="" width={120} height={120} className='object-cover self-center ' />
                </div>
                <div className='p-3'>
                    <h3 className='text-xl font-semibold'>{props.title}</h3>
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
