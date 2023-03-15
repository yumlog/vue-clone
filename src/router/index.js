import Vue from "vue";
import VueRouter from "vue-router";

// views
import ApvRoutes from "./ApvRoutes";
import GroRoutes from "./GroRoutes";
import MypRoutes from "./MypRoutes";
import QmRoutes from "./QmRoutes";
import TrRoutes from "./TrRoutes";

const routes = [
	{
		path: "/home",
		name: "메인",
		component: () => import("@/views/Home/Home"),
		alias: "/",
		meta: {
			transitionName: 'fade'
		}
	},
	{
		path: "*",
		name: "NotFound", // 404
		component: () => import("@/views/NotFound"),
		meta: {
			layout: "EmptyLayout",
		},
	},
	{
		path: "/example",
		name: "예제페이지",
		component: () => import("@/views/Example"),
		meta: {
			breadcrumb: "예제페이지",
			transitionName: 'slide'
		},
	},

	...GroRoutes,
	...ApvRoutes,
	...QmRoutes,
	...TrRoutes,
	...MypRoutes,
];

Vue.use(VueRouter);

// eslint-disable-next-lin
const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes,
});

export default router;
