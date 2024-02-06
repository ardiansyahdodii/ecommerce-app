import React, { useEffect } from 'react'
import { CartItem } from './CartItem'
import { useCartStore } from '../store/cartStore'
import { Button } from './elements/Button'
import { FaArrowRight } from 'react-icons/fa'

export const SideCart = ({ isCartActive, setIsCartActive }) => {
    const { carts, totalPrice, totalItem, changeTotalPrice, changeTotalItem } = useCartStore()

    useEffect(() => {
        changeTotalPrice()
        changeTotalItem()
    }, [carts])
    return (
        <div className={`${isCartActive ? 'translate-x-0' : `translate-x-full w-0`} fixed top-0 right-0 w-1/2 md:w-[30%] min-h-screen transition-all ease-in-out duration-700 bg-white border-l-2`}>
            <div className={`${isCartActive ? 'block' : 'hidden'} p-3`}>
                <div className='flex justify-between items-center border-b-2 p-2 h-16'>
                    <h1 className='text-2xl font-semibold'>
                        Cart ({totalItem})
                    </h1>
                    <div>
                        <FaArrowRight onClick={() => setIsCartActive(!isCartActive)}/>
                    </div>
                </div>
                <div>
                    {carts.map(cart => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                </div>
                <div className='fixed bottom-0 left-0 w-full p-5 space-y-3'>
                    <div className='text-2xl'>Total : $ {totalPrice}</div>
                    <div><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Checkout</button></div>
                </div>
            </div>
        </div>
    )
}
