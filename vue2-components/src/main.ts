import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/init.less"
import './style/var.less'
import $axios from './service/handel'
import $utils from './utils/toast-utils'
Vue.prototype.$axios = $axios;
Vue.prototype.$utils = $utils;
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')