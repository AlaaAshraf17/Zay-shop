import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import {MdShoppingCart}  from "react-icons/md";
import{MdClose} from "react-icons/md";
import {MdMenu} from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-black text-white py-1.5 md:py-2 w-full fixed top-0 left-0 z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="flex items-center space-x-4">

        <div className="flex items-center space-x-1">
          <MdOutlineMail className="text-xs md:text-sm cursor-pointer" />
          <span className="text-xs md:text-sm">info@company.com</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <FaPhone className="text-xs md:text-sm cursor-pointer" />
          <span className="text-xs md:text-sm">010-020-0340</span>
        </div>

      </div>
      
      <div className="flex items-center space-x-3">
          <div className="hover:opacity-80 transition-opacity cursor-pointer">
            <FaFacebookSquare className="text-xs md:text-sm" />
          </div>
          <div className="hover:opacity-80 transition-opacity cursor-pointer">
            <FaInstagram className="text-xs md:text-sm" />
          </div>
          <div className="hover:opacity-80 transition-opacity cursor-pointer">
            <FaXTwitter className="text-xs md:text-sm" />
          </div>
        </div>
    </div>

    <header className="pt-4 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       
          <div className="text-4xl font-bold text-[#59ab6e]">
            ZAY
          </div>

         
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-[#59ab6e] transition-colors">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-[#59ab6e] transition-colors">About</Link>
            <Link to="/products" className="text-gray-800 hover:text-[#59ab6e] transition-colors">Products</Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#59ab6e] transition-colors">Contact</Link>

            <div className="flex space-x-4 ml-8">
  <Link to="/login">
    <button className="btn rounded-lg text-gray-800  hover:bg-[#59ab6e] transition-colors">
      Login
    </button>
  </Link>
  <Link to="/register">
    <button className="btn rounded-lg text-gray-800 hover:bg-[#59ab6e] transition-colors">
      Register
    </button>
  </Link>
</div>
          </nav>

          
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>

         
          <div className="relative">
            <MdShoppingCart className="text-2xl text-gray-800 cursor-pointer hover:text-[#59ab6e] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>

      
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-[#59ab6e]  transition-colors py-2 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
               to="/about"
                className="text-gray-800 hover:text-[#59ab6e]  transition-colors py-2 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
              to="/products"
                className="text-gray-800 hover:text-[#59ab6e]  transition-colors py-2 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact" 
                className="text-gray-800 hover:text-[#59ab6e]  transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 ml-8">
  <Link to="/login">
    <button className="btn rounded-lg text-gray-800  hover:bg-[#59ab6e] transition-colors">
      Login
    </button>
  </Link>
  <Link to="/register">
    <button className="btn rounded-lg text-gray-800 hover:bg-[#59ab6e] transition-colors">
      Register
    </button>
  </Link>
</div>
            </div>
          </div>
        )}
      </header>
  </div>
  )
}

export default Header
