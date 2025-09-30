import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center px-6 py-12">
      <section className="text-center max-w-md bg-white shadow-xl rounded-xl p-8 border border-gray-200 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-6xl font-extrabold text-yellow-500 tracking-tight">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
          <p className="text-gray-500 mt-4">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition-all duration-300 shadow hover:shadow-md"
        >
          Go Back Home
        </Link>
      </section>
    </main>
  );
};

export default Error;
