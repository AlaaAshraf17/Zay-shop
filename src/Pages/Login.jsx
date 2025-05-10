import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const data = { email, password };

    try {
      const response = await fetch('https://back-end-ten-alpha.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token); // Save token
        navigate('/'); //  Go to home
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="w-[320px] bg-white border border-gray-300 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-center text-green-600 mb-4">Login</h2>

        {loading ? (
          <p className="text-green-600 text-center mb-4">Logging in... Please wait</p>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="********"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don’t have an account?
              <Link to="/register" className="text-green-600 hover:underline ml-1">
                Register
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
