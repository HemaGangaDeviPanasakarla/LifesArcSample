import { signIn, fetchAuthSession } from 'aws-amplify/auth';

export const loginWithCognito = async (
  email: string,
  password: string
) => {
  const user = await signIn({
    username: email,
    password,
  });
  const session = await fetchAuthSession();
  const idToken = session.tokens?.idToken?.toString();
  const accessToken = session.tokens?.accessToken?.toString();

  return {
    user,
    idToken,
    accessToken,
  };
};
