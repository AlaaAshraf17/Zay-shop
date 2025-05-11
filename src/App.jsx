import React, { useState, useEffect } from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Products from './Pages/Products'
import SingleProducts from './Pages/SingleProducts'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/Errorpage'
import { CartProvider } from './context/CartContext'



const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://back-end-ten-alpha.vercel.app/api/products')
      .then(res => res.json())
      .then(data => {
        const transformed = data.map((product, index) => ({
          ...product,
          id: product._id || index,
          name: product.name || "No name",
          images: product.images || [],
          price: parseFloat(product.price),
          rating: product.rating || 0,
          best_seller: product.best_seller || false
        }));
        setProducts(transformed);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);
  
  

  return (
   <CartProvider> 
    <div>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleproducts/:productId' element={<SingleProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
   </CartProvider>
  )
}

export default App
