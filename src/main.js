import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const bus = new Vue() // 버스

Vue.prototype.$bus = bus
Vue.prototype.$http = axios
axios.defaults.baseURL ="https://api.themoviedb.org/3/"

//Axios Interceptors
axios.interceptors.request.use( config => {
  if (config.method === 'get') {
    config.params = config.params || {};
    config.params._ = (new Date().getTime())

    // sample list
    config.params['api_key'] = "a6d2365c60935d8d04d7c0f04ca3e6cd";
    config.params['language'] = "en-US";
  }
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use( response => {
  return response
}, error => {

  return Promise.reject(error)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
