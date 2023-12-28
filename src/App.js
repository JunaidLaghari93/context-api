import React from 'react';
import { ProductsProvider } from './Components/ProductsContext';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">E-Commerce App</h1>
      <ProductsProvider>
        <div className="grid grid-cols-2 gap-8">
          <ProductList />
          <ShoppingCart />
        </div>
      </ProductsProvider>
    </div>
  );
}

export default App;















