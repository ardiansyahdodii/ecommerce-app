import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export const CardProduct = () => {

    const text = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'

    return (
        <div className='relative p-2 border-2'>
            <div className='flex justify-center items-center p-2'>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" width={130} />
            </div>
            <div className='p-3'>
                <h3 className='text-xl font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                <p className='mt-3'>{text.substring(0, 50) + ' ...'}</p>
                <div className='flex justify-between items-center mt-3'>
                    <p className='text-lg font-semibold'>$ 109.95</p>
                    <FaCartPlus className='text-2xl'/>
                </div>
                <div className='absolute top-0 left-0 p-1 px-2 m-2 bg-yellow-500 rounded-md'>
                    3.9
                </div>
            </div>

        </div>
    )
}
