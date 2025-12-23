export const awsConfig:any = {
    Auth: {
      Cognito: {
        userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
        userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
        region: import.meta.env.VITE_COGNITO_REGION,
        loginWith: {
          oauth: {
            domain: import.meta.env.VITE_COGNITO_DOMAIN,
            scopes: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
            redirectSignIn: [import.meta.env.VITE_OAUTH_REDIRECT_SIGNIN],
            redirectSignOut: [import.meta.env.VITE_OAUTH_REDIRECT_SIGNOUT],
            responseType: 'code',
            providers: {
              Google: {
                scopes: ['openid', 'email', 'profile']
              }
            }
          },
        },
      },
  
    },
  };
  
  export const validateAwsConfig = () => {
    const required = [
      'VITE_COGNITO_USER_POOL_ID',
      'VITE_COGNITO_CLIENT_ID',
      'VITE_COGNITO_REGION',
      'VITE_COGNITO_DOMAIN',
    ];
    const missing = required.filter((key) => !import.meta.env[key]);
  
    if (missing.length > 0) {
      console.error('❌ Missing AWS Cognito configuration:', missing);
      return false;
    }
    return true;
  };
export const initializeAmplify = async () => {
  try {
    const { Amplify } = await import('aws-amplify');
    Amplify.configure(awsConfig);
    return true;
  } catch (e) {
    console.error('Failed to initialize Amplify', e);
    return false;
  }
};