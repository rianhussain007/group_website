import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { state } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show hero on homepage
  const showHero = location.pathname === '/';
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 border-b">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <Link 
              to="/"
              className="text-2xl font-bold cursor-pointer"
            >
              STREET
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-black font-semibold' : 'text-gray-700'} hover:text-black`}
            >
              HOME
            </Link>
            <Link 
              to="/men" 
              className={`${location.pathname === '/men' ? 'text-black font-semibold' : 'text-gray-700'} hover:text-black`}
            >
              MEN
            </Link>
            <Link 
              to="/women" 
              className={`${location.pathname === '/women' ? 'text-black font-semibold' : 'text-gray-700'} hover:text-black`}
            >
              WOMEN
            </Link>
            <Link 
              to="/sale" 
              className={`${location.pathname === '/sale' ? 'text-black font-semibold' : 'text-gray-700'} hover:text-black`}
            >
              SALE
            </Link>
            <Link 
              to="/blog" 
              className={`${location.pathname === '/blog' ? 'text-black font-semibold' : 'text-gray-700'} hover:text-black`}
            >
              BLOG
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Search className="h-6 w-6 text-gray-700 cursor-pointer" />
            <User className="h-6 w-6 text-gray-700 cursor-pointer" />
            <div 
              onClick={() => navigate('/checkout')}
              className="relative cursor-pointer"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                {state.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}