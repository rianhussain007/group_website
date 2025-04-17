import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function WomenPage() {
  const navigate = useNavigate();
  const womenProducts = products.filter(product => product.category === 'Women');

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Women's Collection</h1>
        <p className="text-gray-600">Explore our curated selection of women's fashion</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
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