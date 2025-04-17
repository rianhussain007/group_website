import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function SalePage() {
  const navigate = useNavigate();
  // For demo purposes, showing all products with a "SALE" badge
  const saleProducts = products.map(product => ({
    ...product,
    price: Number((product.price * 0.8).toFixed(2)) // 20% off
  }));

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sale</h1>
        <p className="text-gray-600">Up to 20% off on selected items</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saleProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer"
          >
            <div className="relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                SALE
              </div>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}