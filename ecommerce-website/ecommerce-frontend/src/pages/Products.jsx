import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    // Simple alert for demo
    alert(`Added ${product.name} to cart!`);
    // In real app: dispatch to Redux
  };

  if (loading) return <div className="text-center py-20">Loading products...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? products.map(product => (
          <div key={product._id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
            <img 
              src={product.image || 'https://picsum.photos/id/20/300/200'} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">₹{product.price}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )) : <p>No products found. Seed some data in backend!</p>}
      </div>
    </div>
  );
};

export default Products;
