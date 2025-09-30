import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <main className="min-h-screen bg-white text-gray-200 flex items-center justify-center px-6">
      <section className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-white">Forgot Password</h1>
          <p className="text-sm text-gray-400 mt-1">
            Enter your email to receive a password reset link.
          </p>
        </header>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md px-4 py-2 font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors"
          >
            Send reset link
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 flex items-center justify-between text-sm">
          <Link
            to="/login"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Back to login
          </Link>
          <Link
            to="/signup"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Create an account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ForgetPassword;
