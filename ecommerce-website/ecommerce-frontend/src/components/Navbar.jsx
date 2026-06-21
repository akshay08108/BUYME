import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [cartCount] = useState(0); // Will connect to Redux/Context later

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">ShopEase</Link>
        
        <div className="flex items-center gap-8">
          <Link to="/products" className="hover:text-indigo-600">Products</Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-indigo-600">
            Cart <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-0.5">{cartCount}</span>
          </Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
