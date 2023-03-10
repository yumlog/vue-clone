import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import { Column, Hidden, Row } from "vue-grid-responsive"
import VueMeta from 'vue-meta'
import App from './App'
import router from './router'

Vue.component("Row", Row);
Vue.component("Column", Column);
Vue.component("Hidden", Hidden);

Vue.use(VueMeta)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
