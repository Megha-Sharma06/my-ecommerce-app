import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

  const{cart}= useCart();
  const totalItems= cart.reduce((total, item)=> total+item.quantity, 0);

  return (
    <nav className='bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg'>
        <Link to="/" className='text-2xl font-bold tracking-wide text-blue-400'>
        TrendyCart
        </Link>

        <div className='flex gap-6 font-medium'>
            <Link to="/"className='hover:text-blue-400 transition-colors'>
            Home
            </Link>

             <Link to="/shop"className='hover:text-blue-400 transition-colors'>
            Shop
            </Link>

             <Link to="/cart"className='hover:text-blue-400 transition-colors'>
            Cart 🛒 ({totalItems})
            </Link>

        </div>
      
    </nav>
  )
}

export default Navbar
