import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(false);

    const data = { name, email, password };

    try {
      const response = await fetch('https://back-end-ten-alpha.vercel.app/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setLoading(true); // show loading
        setTimeout(() => {
          navigate('/login'); // redirect after delay
        }, 2000);
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <div className="bg-white w-screen h-screen flex items-center justify-center p-0 m-0">
        <div className="w-[320px] bg-white border border-gray-300 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-center text-green-600 mb-4">Register</h2>

          {loading ? (
            <p className="text-green-600 text-center text-sm mb-3">Registering.... Please wait</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name"
                />
              </div>

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
                Register
              </button>
              <p className="mt-4 text-sm text-center text-gray-600">
                You have an account?
                <Link to="/login" className="text-green-600 hover:underline ml-1">
                  Login
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;