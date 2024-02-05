import React from 'react'
import { Button } from './elements/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const CartItem = ({ cart }) => {
    return (
        <div className='flex justify-between items-center border-b-2 p-2 space-x-3 text-black'>
            <img src={cart.image} alt="" width={75} />
            <div>
                <div className='flex space-x-3'>
                    <h1 className='text-lg font-semibold'>{cart.title}</h1>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center space-x-3'>
                        <FaMinus className='text-xl border-2 p-1 hover:bg-red-600' />
                        <div className='flex justify-center items-center'>
                            {cart.quantity}
                        </div>
                        <FaPlus className='text-xl border-2 p-1 hover:bg-blue-600' />
                    </div>
                    <div>
                        {cart.price}
                    </div>
                    <div>
                        $ 200
                    </div>
                </div>
            </div>
            <div className='text-xl text-red-600 font-bold cursor-pointer'>X</div>
        </div>
    )
}
