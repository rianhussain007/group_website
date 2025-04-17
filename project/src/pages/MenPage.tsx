import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function MenPage() {
  const navigate = useNavigate();
  const menProducts = products.filter(product => product.category === 'Men');

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Men's Collection</h1>
        <p className="text-gray-600">Discover our latest men's fashion and accessories</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}