export default class UserCredentialsStorage {
  static setAccessToken (token) {
    window.localStorage.setItem('access_token', token)
  }

  static setRefreshToken (token) {
    window.localStorage.setItem('refresh_token', token)
  }

  static removeUserCredentials () {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
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

  static getUserId (token) {
    if (token === null) return null

    const encode = token.split('.')[1]
    if (encode === undefined) return null

    const decode = window.atob(encode)
    const json = JSON.parse(decode)
    const userid = json.sub
    if (userid === undefined) return null

    return userid
  }
}
