export default class UserCredentialsStorage {
  static setAccessToken (token) {
    window.localStorage.setItem('access_token', token)
  }

  static removeUserCredentials () {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('isLoggedIn')
  }

  static getAccessToken () {
    var accessToken = window.localStorage.getItem('access_token')
    if (accessToken === null) {
      return null
    }
    return accessToken
  }

  static isUserLoggedIn (status) {
    window.localStorage.setItem('isLoggedIn', status)
  }

  static userIsLoggedIn () {
    return JSON.parse(window.localStorage.getItem('isLoggedIn'))
  }
}
