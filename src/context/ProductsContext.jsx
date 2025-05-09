// src/context/ProductsContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import { getAllProducts } from '../services/productsAPI';

const initialState = {
  products: [],
  loading: false,
  error: null,
  filters: { page: 1, category: '', sort: '', search: '' },
  totalPages: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: null };
    case 'SET_FILTERS':
      return { 
        ...state, 
        filters: { ...state.filters, ...action.payload }, 
        loading: true 
      };
    case 'SET_DATA':
      return {
        ...state,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filters } = state;

  // whenever filters change, fetch new data
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    getAllProducts(filters)
      .then(data => {
        dispatch({ type: 'SET_DATA', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      });
  }, [filters]);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

