import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa'
import { Button } from './elements/Button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = ({setSearch, isCartActive, setIsCartActive}) => {
    const [searchType, setSearchType] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    
    const navigate = useNavigate()

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        setSearch(searchType)
        navigate('/product/search')
    }

    // console.log(search)
    return (
        <div className='flex justify-between p-5 border-b-[1px] shadow-sm'>
            <Link to='/' className='flex justify-center items-center'>
                <h1 className="text-3xl font-bold">DooShop</h1>
                <FaShoppingCart className="text-3xl font-bold" />
            </Link>
            <div>
                <form onSubmit={handleSubmitSearch} className='flex space-x-3'>
                    <input
                        type="text"
                        placeholder="Search product"
                        value={searchType}
                        onChange={(event) => setSearchType(event.target.value)}
                        className="border-[1px] border-gray-400 rounded-md px-3 py-1"
                    />
                    <Button type="submit" text="Search" />
                </form>
            </div>
            <div className='flex items-center space-x-3'>
                <div className='relative cursor-pointer'  onClick={() => setIsCartActive(!isCartActive)}>
                    <FaCartArrowDown className='text-3xl mr-3'/>
                    <div className='absolute -bottom-2 right-1 bg-red-600 rounded-full w-5 h-5'>
                        <p className='text-center text-sm font-bold'>10</p>
                    </div>
                </div>
                {isLogin ? <Button text="Logout" /> :
                    (
                        <div className='flex space-x-3'>
                            <Button text="Login" />
                            <Button text="Register" />
                        </div>)}
            </div>
        </div>
    )
}
