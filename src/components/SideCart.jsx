import React from 'react'
import { CartItem } from './CartItem'
import { useCartStore } from '../store/cartStore'
import { Button } from './elements/Button'

export const SideCart = ({ isCartActive }) => {
    const {carts} = useCartStore()
    return (
        <div className={`${isCartActive ? 'translate-x-0' : `translate-x-full w-0`} absolute top-0 right-0 w-1/2 md:w-[30%] transition-all ease-in-out duration-700 bg-white border-l-2 h-full`}>
            <div className={`${isCartActive ? 'block' : 'hidden'} p-3`}>
                <div className='flex justify-between items-center border-b-2 p-2'>
                    <h1 className='text-2xl font-semibold'>
                        Cart (23)
                    </h1>
                </div>
                <div>
                    {carts.map(cart => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                </div>
            </div>
        </div>
    )
}
