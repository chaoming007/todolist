import Vue from 'vue'
import App from './App.vue'
import store from './components/store/'
import router from './components/router/'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
