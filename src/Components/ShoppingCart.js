import React from 'react';
import { useProducts } from '../Components/ProductsContext';

const ShoppingCart = () => {
  const { state, removeFromCart } = useProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id} className="mb-4">
            <span className="font-bold">{item.name}</span> - ${item.price}
            <button
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;