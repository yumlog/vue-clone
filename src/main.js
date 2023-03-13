import "@/plugins/GlobalComponents"; // 컴포넌트 전역 등록
import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App";
import router from "./router";

Vue.use(VueMeta);

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app");
