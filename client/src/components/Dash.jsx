import React, { useEffect, useState } from 'react';
import AddToCart from './AddToCart';

const Dashboard = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch a list of meals (Seafood category as example)
  const fetchMeals = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error('Error fetching meals:', err);
      setError('Failed to load meals');
    } finally {
      setLoading(false);
    }
  };

  // Fetch full details for a meal by ID
  const fetchMealDetails = async (idMeal) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await res.json();
      setSelectedMeal(data.meals ? data.meals[0] : null);
    } catch (err) {
      console.error('Error fetching meal details:', err);
    }
  };

  // Example React code
const handleBuy = async (meal, method) => {
  const res = await fetch("http://localhost:5000/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: 200,
      orderId: `ORD-${Date.now()}`,
      paymentMethod: method, // "bkash" | "nagad" | "rocket"
    }),
  });

  const data = await res.json();
  window.location.href = data.redirectURL; // take user to payment page
};


  useEffect(() => {
    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
        <p className="text-lg font-medium">Loading meals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">🍽️ Seafood Meals</h1>

      {/* Grid of meals */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <article key={meal.idMeal} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{meal.strMeal}</h2>

              <div className="mt-4 flex gap-3">
                <AddToCart meal={meal} />
                <button
                  onClick={handleBuy}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => fetchMealDetails(meal.idMeal)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modal / details section */}
      {selectedMeal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedMeal(null)} // close when clicking overlay
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMeal(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>

            {!selectedMeal.strInstructions ? (
              <p className="text-gray-600">Loading details...</p>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">{selectedMeal.strMeal}</h2>
                <img
                  src={selectedMeal.strMealThumb}
                  alt={selectedMeal.strMeal}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-700 mb-2">
                  <strong>Category:</strong> {selectedMeal.strCategory} |{" "}
                  <strong>Area:</strong> {selectedMeal.strArea}
                </p>
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedMeal.strInstructions}
                </p>
              </>
            )}
          </div>
        </div>
      )}


    </main>
  );
};

export default Dashboard;
