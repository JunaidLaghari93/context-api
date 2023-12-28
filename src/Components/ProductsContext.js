import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer function
const productsReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
  ],
  cart: [],
};

// Create context
const ProductsContext = createContext();

// Create a provider component
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  return (
    <ProductsContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Create a custom hook to use the context
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};