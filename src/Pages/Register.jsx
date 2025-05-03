import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      
      <h1>Register</h1>
      <div className="bg-white w-screen h-screen flex items-center justify-center p-0 m-0">
      <div className="w-[320px] bg-white border border-gray-300 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-center text-green-600 mb-4">register</h2>

        <form>
          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-1">name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='name'
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm text-gray-700 mb-1">email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md"
          >
           <Link to="/">register</Link>
            
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
             you have an account
            <Link to="/login" className="text-green-600 hover:underline ml-1">
             login
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
