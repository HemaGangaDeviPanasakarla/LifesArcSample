import {
  signIn,
  confirmSignIn,
  fetchAuthSession,
} from 'aws-amplify/auth'

/* ================= PASSWORD LOGIN ================= */
export const loginWithCognito = async (
  email: string,
  password: string
) => {
  const user = await signIn({
    username: email,
    password,
  })

  const session = await fetchAuthSession()

  return {
    user,
    idToken: session.tokens?.idToken?.toString(),
    accessToken: session.tokens?.accessToken?.toString(),
  }
}

/* ================= SEND OTP ================= */

export const sendOtpToEmail = async (email: string) => {
  const user = await signIn({
    username: email,
    options: {
      authFlowType: 'CUSTOM_WITHOUT_SRP',
    },
  })
  return user
}

/* ================= VERIFY OTP & LOGIN ================= */
export const verifyOtpAndLogin = async (
  email: string,
  otp: string
) => {
  const user = await confirmSignIn({
    challengeResponse: otp,
  })

  const session = await fetchAuthSession()

  return {
    user,
    idToken: session.tokens?.idToken?.toString(),
    accessToken: session.tokens?.accessToken?.toString(),
  }
}

