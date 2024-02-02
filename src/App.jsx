import React, { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DetailProduct } from './pages/DetailProduct'
import { SearchProduct } from './pages/SearchProduct'

const App = () => {
  const [search, setSearch] = useState('')

  // console.log(search);
  return (
    <div>
      <Header setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Home />} />
        <Route path='/product/:productId' element={<DetailProduct />} />
        <Route path='/product/search' element={<SearchProduct search={search} />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App