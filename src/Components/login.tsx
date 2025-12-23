import { useState } from 'react'
import { loginWithCognito } from '../services/AxiosInstance'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    try {
      setLoading(true)
      setError('')
      await loginWithCognito(email, password)
      window.location.href = '/dashboard'
    } catch (err: unknown) {
      setError((err as Error).message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white">

          <h2 className="text-3xl font-bold text-purple-700 mb-1 text-center">
            Welcome Back LifesArc
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Login to continue
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-2.5 rounded-xl font-semibold transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In to Your Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-purple-600 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
