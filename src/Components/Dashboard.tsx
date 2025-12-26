function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Hi  Welcome to LifesArc
        </h1>

        <p className="text-gray-600 mb-6">
          You are successfully logged in.
        </p>

        <p><button onClick={() => window.location.href = '/profile'} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Continue to Address</button></p>

        <br />

        <button
          onClick={() => {
            localStorage.clear()
            window.location.href = '/login'
          }}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
