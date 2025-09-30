import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (idMeal, qty) => {
    if (qty < 1) return;
    const updatedCart = cart.map(item =>
      item.idMeal === idMeal ? { ...item, quantity: qty } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (idMeal) => {
    const updatedCart = cart.filter(item => item.idMeal !== idMeal);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * 200, 0); // assume 200 BDT per meal

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-600">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          className="w-32 mb-6 opacity-70"
        />
        <p className="text-xl font-semibold">Your cart is empty</p>
        <p className="text-gray-500 mt-2">Add some delicious meals to get started!</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cart Items */}
        <section className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          {cart.map(item => (
            <div key={item.idMeal} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-20 h-20 object-cover rounded-lg shadow"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.strMeal}</h2>
                  <p className="text-gray-500">200 BDT</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.idMeal, item.quantity - 1)}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200"
                  >
                    –
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.idMeal, parseInt(e.target.value))}
                    className="w-12 text-center border-l border-r"
                  />
                  <button
                    onClick={() => updateQuantity(item.idMeal, item.quantity + 1)}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">{item.quantity * 200} BDT</p>
                <button
                  onClick={() => removeItem(item.idMeal)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Summary */}
        <aside className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-20">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{total} BDT</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-4">
            <span>Total</span>
            <span>{total} BDT</span>
          </div>
          <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-400 transition">
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
