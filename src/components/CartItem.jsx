import React from 'react'
import { Button } from './elements/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const CartItem = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-2 space-x-3 text-black'>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" width={75} />
            <div>
                <div className='flex space-x-3'>
                    <h1 className='text-lg font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center space-x-3'>
                        <FaMinus className='text-xl border-2 p-1 hover:bg-red-600' />
                        <div className='flex justify-center items-center'>
                            1
                        </div>
                        <FaPlus className='text-xl border-2 p-1 hover:bg-blue-600' />
                    </div>
                    <div>
                        $ 100
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
