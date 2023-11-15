import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/init.less"
import './style/var.less'
import $axios from './service/handel'

Vue.prototype.$axios = $axios;
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
