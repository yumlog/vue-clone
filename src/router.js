import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */'@/views/Home.vue')
const PageOne = () =>
  import(/* webpackChunkName: "page-one" */ '@/views/PageOne.vue')
const PageTwo = () =>
  import(/* webpackChunkName: "page-two" */ '@/views/PageTwo.vue')

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "홈",
    component: Home,
  },
  {
    path: "/page-one",
    name: "페이지1",
    component: PageOne,
  },
  {
    path: "/page-two",
    name: "페이지2",
    component: PageTwo,
  },
];

// eslint-disable-line no-unused-vars
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

export default router