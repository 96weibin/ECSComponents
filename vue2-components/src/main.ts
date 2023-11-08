import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/init.less"
import './style/var.less'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')