const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Welcome to ShopEase</h1>
        <p className="text-xl text-gray-600">Discover amazing products at unbeatable prices</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Electronics', 'Fashion', 'Home'].map(cat => (
          <div key={cat} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
            <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl">
              {cat}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{cat}</h3>
              <p className="text-gray-500 mt-2">Explore our latest collection</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
