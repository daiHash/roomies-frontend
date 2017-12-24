import * as types from '../mutation-types'
import Storage from '../../utils/storage'

// User states
const state = {

}

// Change user states sync
const mutations = {
  [types.USER_LOG_IN] (state, status) {
    Storage.isUserLoggedIn(status)
  },
  [types.USER_REGISTER] (state, status) {
    Storage.isUserLoggedIn(status)
  },
  [types.AUTHORIZE_USER] (state, payload) {
    Storage.setAccessToken(payload)
  }
}

// Manipulate state async
const actions = {
  userLogin ({commit}, userCredentials) {
    commit(types.USER_LOG_IN, true)
    commit(types.AUTHORIZE_USER, userCredentials)
  },
  userRegister ({commit}, userCredentials) {
    commit(types.USER_REGISTER, true)
    commit(types.AUTHORIZE_USER, userCredentials)
  }
}

// Get Data
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
