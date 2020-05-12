import validateLinkedinAuthToken from '../api/api';

const LOGIN_WITH_LINKEDIN = 'LOGIN_WITH_LINKEDIN';

const loginWithLinkedin = async (accessToken) => {
  const user = await validateLinkedinAuthToken(accessToken)

  return {
    type: LOGIN_WITH_LINKEDIN,
    user: {
      firstName: user.firstName,
      secondName: user.secondName,
      email: user.email,
      userId: user.userId,
    }
  }
}

export {
  LOGIN_WITH_LINKEDIN,
  loginWithLinkedin
}