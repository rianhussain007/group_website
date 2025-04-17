import React from 'react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Spring Fashion Trends 2025",
      excerpt: "Discover the latest trends that will dominate the fashion world this spring.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
      date: "March 15, 2025"
    },
    {
      id: 2,
      title: "Sustainable Fashion: A Guide",
      excerpt: "Learn how to build a sustainable wardrobe without compromising on style.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
      date: "March 10, 2025"
    },
    {
      id: 3,
      title: "Tech Accessories That Make a Statement",
      excerpt: "The perfect blend of fashion and function in modern tech accessories.",
      image: "https://images.unsplash.com/photo-1491947153227-33d59da6c448?w=500",
      date: "March 5, 2025"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600">Stay updated with the latest fashion trends and style tips</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}