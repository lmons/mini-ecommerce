import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import Product from './components/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = product => {
    console.log('Adding to cart:', product);
  };

  return (
    <div className="App">
      <h1>Mini E-commerce Product Gallery</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
