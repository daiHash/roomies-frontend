import * as types from '../mutation-types'
import Storage from '../../utils/storage'
import Vue from '../../main'

// User states
const state = {

}

// Change user states sync
const mutations = {
  [types.USER_LOG_IN] (state, status) {
    Storage.isUserLoggedIn(status)
  },
  [types.USER_LOG_OUT] () {
    Storage.removeUserCredentials()
    delete Vue.axios.defaults.headers.common['Authorization']
  },
  [types.USER_REGISTER] (state, status) {
    Storage.isUserLoggedIn(status)
  },
  [types.AUTHORIZE_USER] (state, payload) {
    Storage.setAccessToken(payload.access_token)
    Storage.setRefreshToken(payload.refresh_token)
    Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${Storage.getAccessToken()}`
  }
}

// Manipulate state async
const actions = {
  userLogin ({commit}, userCredentials) {
    commit(types.USER_LOG_IN, true)
    commit(types.AUTHORIZE_USER, userCredentials)
  },
  userLogout ({commit}) {
    commit(types.USER_LOG_OUT)
  },
  userRegister ({commit}) {
    commit(types.USER_REGISTER, true)
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
