import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-300">
      <h2 className="text-xl font-bold text-center text-green-600 mb-4">login</h2>

        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">password</label>
            <input
              type="password"
              required
              className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
          >
            <Link to="/"> login</Link>
           
          </button>
          
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
