import React, { useState } from 'react';

const Pannier = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>Pannier</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart("Article")}>Add to Cart</button>
    </div>
  );
};

export default Pannier;
