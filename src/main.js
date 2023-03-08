import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import { Column, Hidden, Row } from "vue-grid-responsive"
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

Vue.component("row", Row);
Vue.component("column", Column);
Vue.component("hidden", Hidden);

Vue.use(VueMeta)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
