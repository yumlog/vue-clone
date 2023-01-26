import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
