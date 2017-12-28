// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'
import store from './store/store'
import Storage from './utils/storage/index'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.config.productionTip = false

Vue.use(vueSmoothScroll)

let networkClient = axios.create({
  baseURL: 'http://localhost:3000/v1/',
  timeout: 10000
})
if (Storage.getAccessToken() !== null) {
  networkClient.defaults.headers.common['Authorization'] = `Bearer ${Storage.getAccessToken()}`
}

Vue.use(VueAxios, networkClient)
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  networkClient,
  template: '<App/>',
  components: { App }
})
