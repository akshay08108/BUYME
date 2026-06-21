import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const res = await axios.post(`http://localhost:5000${endpoint}`, formData);
      alert(isLogin ? 'Login successful!' : 'Registration successful!');
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.error || 'Error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8">{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3.5 rounded-2xl text-white font-medium transition"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-indigo-600 hover:underline">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
