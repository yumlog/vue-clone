import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

Vue.use(VueMeta)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
