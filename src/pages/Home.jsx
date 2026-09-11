import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Banner Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">
            New Season Arrivals 🚀
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Tech & Trend Products
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Upgrade your lifestyle with our premium quality selection. High performance, sleek design, and affordable pricing.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
            alt="Hero Banner"
            className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 2. Feature Highlights Section */}
      <section className="bg-white py-10 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-800 text-lg">Free Shipping</h3>
            <p className="text-gray-500 text-sm mt-1">On all orders above $50</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-800 text-lg">24/7 Support</h3>
            <p className="text-gray-500 text-sm mt-1">Get instant assistance anytime</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-800 text-lg">Secure Payments</h3>
            <p className="text-gray-500 text-sm mt-1">100% safe transaction processing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
