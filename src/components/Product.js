import React from 'react';
const Product = ({ product, onAddToCart }) => {
  const { id, title, price, image } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>${price}</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
