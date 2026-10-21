import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const totalPrice = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-20 h-20 bg-gray-50 rounded-lg p-2 flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base line-clamp-2">{item.title}</h3>
                  <p className="text-lg font-bold text-blue-600 mt-1">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                  <button 
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold text-gray-800 text-sm">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm font-semibold text-red-500 hover:text-red-700 hover:underline transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 h-fit bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-200">
            Order Summary
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="font-semibold text-gray-900">${shipping.toFixed(2)}</span>
            </div>
          </div>

          <div className="my-4 border-t border-gray-200" />

          <div className="flex justify-between items-center mb-6">
            <span className="text-base font-bold text-gray-900">Total Price</span>
            <span className="text-xl font-extrabold text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>

          <button 
            onClick={() => alert('Order placed successfully!')}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-sm transition-all duration-200 text-center"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;