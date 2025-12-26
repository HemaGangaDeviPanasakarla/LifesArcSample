import { useState } from 'react'
import {
  loginWithCognito,
  sendOtpToEmail,
  verifyOtpAndLogin
} from '../services/AWSConginito'

type LoginMethod = 'password' | 'otp'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('password')

  const [step, setStep] = useState<'INPUT' | 'OTP'>('INPUT')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  /* ---------- PASSWORD LOGIN ---------- */
  async function handlePasswordLogin(e: React.FormEvent) {
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

  /* ---------- SEND OTP ---------- */
  async function handleSendOtp() {
    if (!email) {
      setError('Please enter email')
      return
    }

    try {
      setLoading(true)
      setError('')
      await sendOtpToEmail(email)
      setStep('OTP')
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  /* ---------- VERIFY OTP ---------- */
  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault()

    if (!otp) {
      setError('Please enter OTP')
      return
    }

    try {
      setLoading(true)
      setError('')
      await verifyOtpAndLogin(email, otp)
      window.location.href = '/dashboard'
    } catch (err: unknown) {
      setError((err as Error).message || 'Invalid OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white">

          <h2 className="text-3xl font-bold text-purple-700 text-center">
            Welcome Back LifesArc
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Login to continue
          </p>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          {/* Login Method */}
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => {
                setLoginMethod('password')
                setStep('INPUT')
                setError('')
              }}
              className={`flex-1 py-2 rounded-lg font-medium ${
                loginMethod === 'password'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Password
            </button>

            <button
              type="button"
              onClick={() => {
                setLoginMethod('otp')
                setStep('INPUT')
                setError('')
              }}
              className={`flex-1 py-2 rounded-lg font-medium ${
                loginMethod === 'otp'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              OTP
            </button>
          </div>

          {/* PASSWORD FORM */}
          {loginMethod === 'password' && (
            <form onSubmit={handlePasswordLogin} className="space-y-4">
              <InputEmail email={email} setEmail={setEmail} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-xl"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          )}

          {/* OTP FLOW */}
          {loginMethod === 'otp' && step === 'INPUT' && (
            <>
              <InputEmail email={email} setEmail={setEmail} />

              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-xl"
              >
                {loading ? 'Sending OTP...' : 'Verify with OTP'}
              </button>
            </>
          )}

          {loginMethod === 'otp' && step === 'OTP' && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-xl"
              >
                {loading ? 'Verifying...' : 'Sign In'}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  )
}

function InputEmail({
  email,
  setEmail,
}: {
  email: string
  setEmail: (v: string) => void
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border px-4 py-2"
        placeholder="you@example.com"
      />
    </div>
  )
}

export default Login

