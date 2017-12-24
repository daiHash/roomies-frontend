export default class UserCredentialsStorage {
  static setAccessToken (token) {
    window.localStorage.setItem('access_token', token)
  }

  static removeUserCredentials () {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('isLoggedIn')
  }

  static getAccessToken () {
    window.localStorage.getItem('access_token')
  }

  static isUserLoggedIn (status) {
    window.localStorage.setItem('isLoggedIn', status)
  }

  static userIsLoggedIn () {
    return JSON.parse(window.localStorage.getItem('isLoggedIn'))
  }
}
