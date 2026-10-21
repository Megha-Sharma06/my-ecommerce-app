import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App () {
  return (
    <div className=' flex flex-col min-h-screen bg-gray-50'>
        <Navbar/>
  
        <main className='grow'>
        <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/shop" element= {<Shop/>}/>
            <Route path= "/cart" element={<Cart/>}/>

        </Routes>
      </main>

      <Footer/>
    </div>
  )
}

export default App
