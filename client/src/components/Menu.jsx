import { useEffect, useState } from "react";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error | Status: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data.categories); // Correct key is 'categories'
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
        <p className="text-lg font-medium">Menu is Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Meal Categories</h1>
          <p className="text-gray-500 mt-2">Explore different types of meals</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {category.strCategory}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {category.strCategoryDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
