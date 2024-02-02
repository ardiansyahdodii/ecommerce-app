import React from 'react'

export const SideCart = ({ isCartActive }) => {
    return (
        <div className={`${isCartActive ? 'translate-x-0' : `translate-x-full w-0`} absolute top-0 right-0 w-1/4 transition-all ease-in-out duration-700 bg-gray-800 text-white h-full`}>
            <h1 className={`${isCartActive ? 'block' : 'hidden'}`}>Cart Lorem ipsum dolor sit amet.</h1>
            {/* <h1>Cart</h1> */}
        </div>
    )
}
