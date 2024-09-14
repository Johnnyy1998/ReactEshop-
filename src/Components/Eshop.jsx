import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import ContextProvider from './ContextProvider'
import Basket from './Basket'


const Eshop = () => {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/products" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
      </ContextProvider> 
    </div>
  )
}

export default Eshop
