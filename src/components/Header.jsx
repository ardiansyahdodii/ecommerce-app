import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa'
import { Button } from './elements/Button'
import { useEffect, useState } from 'react'

export const Header = () => {
    const [searchType, setSearchType] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log(search)
    }, [search])

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        setSearch(searchType)
    }

    // console.log(search)
    return (
        <div className='flex justify-between p-5 border-b-[1px] shadow-sm'>
            <div className='flex justify-center items-center'>
                <h1 className="text-3xl font-bold">DooShop</h1>
                <FaShoppingCart className="text-3xl font-bold" />
            </div>
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
                <FaCartArrowDown className='text-2xl mr-3' />
                <Button text="Login" />
                <Button text="Register" />
            </div>
        </div>
    )
}
