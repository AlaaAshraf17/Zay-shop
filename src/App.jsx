import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Products from './Pages/Products'
import SingleProducts from './Pages/SingleProducts'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/Errorpage'

const App = () => {
  return (
    <div>
     <Header/>

      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/singleproducts' element={<SingleProducts/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='*' element={<ErrorPage/>}/>
      </Routes>

     <Footer/>
      
    </div>
  )
}

export default App

