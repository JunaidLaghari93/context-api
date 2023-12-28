import React from 'react';
import { useProducts } from '../Components/ProductsContext';

const ProductList = () => {
  const { state, addToCart } = useProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul>
        {state.products.map((product) => (
          <li key={product.id} className="mb-4">
            <span className="font-bold">{product.name}</span> - ${product.price}
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;