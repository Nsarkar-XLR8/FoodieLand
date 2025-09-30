import React, { useState } from 'react';

const AddToCart = ({ meal }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    // Get existing cart
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if meal already in cart
    const index = existingCart.findIndex(item => item.idMeal === meal.idMeal);

    if (index >= 0) {
      // If already exists, increase quantity
      existingCart[index].quantity += 1;
    } else {
      // Add new item
      existingCart.push({ ...meal, quantity: 1 });
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    setAdded(true);
  };

  return (
    <button
      onClick={handleAdd}
      className={`px-4 py-2 rounded-lg transition ${
        added ? 'bg-yellow-300 text-gray-800' : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
      }`}
    >
      {added ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default AddToCart;
