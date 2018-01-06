import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    profile
  }
})
