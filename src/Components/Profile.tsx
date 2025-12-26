import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [showEmailOtp, setShowEmailOtp] = useState(false);
    const navigate = useNavigate()

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>s

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Profile
        </h2>
        <p className="mt-2 text-lg text-gray-600">Contact Information</p>
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div>
            <label className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <input className="mt-2 w-full rounded-md border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <input className="mt-2 w-full rounded-md border px-3 py-2" />
          </div>

 
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="mt-2 w-full rounded-md border px-3 py-2"
            />

            {!showEmailOtp && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Enter the verification code sent to your email
                </p>
                <button
                  type="button"
                  onClick={() => setShowEmailOtp(true)}
                  className="flex items-center gap-1 font-semibold text-teal-700"
                >
                  Verify →
                </button>
              </div>
            )}


            {showEmailOtp && (
              <>
                <div className="mt-3 flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <input
                      key={i}
                      maxLength={1}
                      className="w-10 border-b-2 border-gray-400 text-center text-lg focus:outline-none"
                    />
                  ))}
                </div>
                <button className="mt-2 text-sm font-semibold text-orange-500">
                  Send again?
                </button>
              </>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Phone number
            </label>
            <input
              placeholder="000-000-0000"
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
            

            {!showEmailOtp && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Enter the verification code sent to your phone Number
                </p>
                <button
                  type="button"
                  onClick={() => setShowEmailOtp(true)}
                  className="flex items-center gap-1 font-semibold text-teal-700"
                >
                  Verify →
                </button>
              </div>
            )}

            {/* IMAGE 2 (after verify) */}
            {showEmailOtp && (
              <>
                <div className="mt-3 flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <input
                      key={i}
                      maxLength={1}
                      className="w-10 border-b-2 border-gray-400 text-center text-lg focus:outline-none"
                    />
                  ))}
                </div>
                <button className="mt-2 text-sm font-semibold text-orange-500">
                  Send again?
                </button>
              </>
            )}
          </div>

        </div>
{/* 
       <button
  type="button"
  onClick={() => navigate('/address')}
  className="mt-10 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white"
>
  Next
</button> */}

  <div className="mt-10 flex gap-4">

  <button
    type="button"
    onClick={() => navigate('/dashboard')}
    className="w-1/2 rounded-md border border-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
  >
    Back
  </button>

  <button
    type="submit"
    onClick={() => navigate('/address')}
    className="w-1/2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-2.5 rounded-xl font-semibold transition disabled:opacity-50"
  >
   Next
  </button>
</div>

      </form>
    </div>
  )
}
