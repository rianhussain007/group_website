import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const navigate = useNavigate();
  const { searchResults, searchTerm } = useSearch();

  const renderNoResults = () => (
    <div className="col-span-full text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
      <p className="text-gray-600">
        We couldn't find any products matching "{searchTerm}"
      </p>
    </div>
  );

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center mb-12" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1500)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">STREET STYLE</h1>
            <p className="text-2xl mb-8">UNLEASHED</p>
            <button 
              onClick={() => navigate('/men')}
              className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.length === 0 && searchTerm
            ? renderNoResults()
            : searchResults.slice(0, 6).map((product) => (
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
    </div>
  );
}