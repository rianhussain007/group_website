import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import SalePage from './pages/SalePage';
import BlogPage from './pages/BlogPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/men" element={<MenPage />} />
                <Route path="/women" element={<WomenPage />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;