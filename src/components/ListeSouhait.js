import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };
  return (
    <div>
      <h2>Liste de souhaits</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToWishlist("Article souhaité")}>
        Ajout à la liste de souhait
      </button>
    </div>
  );
};

export default Wishlist;
