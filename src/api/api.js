export const validateLinkedinAuthToken = (token) => {
  return fetch('http://192.168.65.37:3001/oauth/linkedin/callback', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: token,
    })
    .then(res => res.json())
    .then(json => {
      const fName = Object.values(json.profile.firstName.localized);
      const lName = Object.values(json.profile.lastName.localized);

      const profileData = {
        firstName: fName,
        lastName: lName,
        email: json.email.elements[0]['handle~'].emailAddress,
        userId: json.profile.id,
      }

      return profileData
    })
}
