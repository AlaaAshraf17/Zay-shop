
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext'; 

createRoot(document.getElementById('root')).render(
 
  <ThemeProvider>
  <BrowserRouter>
  <ProductsProvider>
          <CartProvider> 
            <App />
          </CartProvider>
      </ProductsProvider>

    </BrowserRouter>
</ThemeProvider>

)
