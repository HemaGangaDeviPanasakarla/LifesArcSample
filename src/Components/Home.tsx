function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300 px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
    LifesArc
      </h1>

      <p className="text-gray-700 text-lg mb-8 text-center max-w-xl">
        Welcome to our application. Please login to continue and explore all the
        features we have Home services at your doorstep.
      </p>


      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get Started
        </h2>

        <p className="text-gray-600 mb-6">
          Click the button below to navigate to the login page and access your
          account.
        </p>

        <a href="/login">
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white text-xl px-6 py-3 rounded-lg w-full">
            Login
          </button>
        </a>

        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account? Please contact the admin for access.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-600 text-sm">
        © 2025 Your LifesArc. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
