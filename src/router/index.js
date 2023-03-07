import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from '@/views/Example/index.vue'
import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)

const Apv = { template: '<div>Apv Page</div>' }
const Qm = { template: '<div>Qm Page</div>' }
const Tr = { template: '<div>Tr Page</div>' }
const Myp = { template: '<div>Myp Page</div>' }

// login
const routes = [
	{
		path: '/home',
		name: '메인',
		component: Home,
		alias: '/',
	},
	{
		path: '*',
		name: 'NotFound', // 404
		component: NotFound,
		meta: {
			layout: 'EmptyLayout',
		},
	},
	{
		path: '/example',
		name: '예제페이지',
		component: Example,
		meta: {
			breadcrumb: '예제페이지',
		},
	},
	// pages
	{
		path: '/apv',
		name: '결재',
		component: Apv,
		meta: {
			breadcrumb: '결재',
			transition: 'slideLeft',
		},
	},
	{
		path: '/qm',
		name: '조회',
		component: Qm,
		meta: {
			breadcrumb: '조회',
			transition: 'slideRight',
		},
	},
	{
		path: '/tr',
		name: '이체',
		component: Tr,
		meta: {
			breadcrumb: '이체',
		},
	},
	{
		path: '/myp',
		name: '마이페이지',
		component: Myp,
		meta: {
			breadcrumb: '마이페이지',
		},
	},
]

// eslint-disable-next-lin
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
