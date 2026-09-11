import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext';

const Shop = () => {
  
    const[products, setProducts]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState(null);

    const {addToCart}= useCart();

    useEffect(()=>{
        
        const fetchProducts=async()=>{
            try{
            const response=await fetch("https://fakestoreapi.com/products");

            if(!response.ok){
                throw new Error("Not able to Fetch Data");
            }
            const data= await response.json();
            setProducts(data);
        } 
        catch (err){
            setError(err.message);
        }finally{
           setLoading(false);
        }};
    fetchProducts();
},[]);

if(loading){
    return(
        <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Products are Loading... ⏳
        </div>
      </div>
    );
}

if(error){
    return(
        <div className='p-8 text-center text-red-500 font-semibold'>Error:{error}</div>
    )
}


  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8 border-b pb-4'>Explore Products</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {products.map((product)=>(
        <div key={product.id} 
        className='bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100'>
        <div>
            <div className='h-48 w-full flex justify-center items-center mb-4 p-2 bg-white rounded-lg'>
                <img src={product.image} alt={product.title} 
                className='max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300'/>
            </div>
            <h2 className='font-semibold text-gray-800 text-sm line-clamp-1'>{product.title}</h2>
            <p className='text-xs text-gray-400 mt-1 capitalize'>{product.category}</p>
        </div>
      
      <div className='mt-4 flex justify-between items-center pt-3 border-t'>
        <span className='text-lg font-bold text-blue-900'>${product.price}</span>
        <button onClick={()=>addToCart(product)} className='bg-blue-900 hover:bg-blue-950 active:scale-95 text-white text-xs font-semibold px-3 py-2 rounded-large transition-all shadow-sm'>
            Add to Cart</button>
      </div>
        </div>

    ))}
    </div>      
    </div>
  )
}

export default Shop;