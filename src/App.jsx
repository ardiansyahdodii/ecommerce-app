import React, { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DetailProduct } from './pages/DetailProduct'
import { SearchProduct } from './pages/SearchProduct'
import { SideCart } from './components/SideCart'

const App = () => {
  const [search, setSearch] = useState('')
  const [isCartActive, setIsCartActive] = useState(false)
  // const [carts, setCarts] = useState([])


  // console.log(search);
  return (
    <div>
      <Header setSearch={setSearch} setIsCartActive={setIsCartActive} isCartActive={isCartActive}/>
      <div className='relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Home />} />
          <Route path='/product/:productId' element={<DetailProduct />} />
          <Route path='/product/search' element={<SearchProduct search={search} />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
        {/* <div className='absolute top-0 right-0'> */}
          <SideCart isCartActive={isCartActive} />
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default App