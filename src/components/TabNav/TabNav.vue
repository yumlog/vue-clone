<template>
	<ul class="tab-nav">
		<li class="tab-nav--item" v-for="(nav, index) in tabNavList" :key="index">
			<router-link
				role="button"
				:to="nav.path"
				:class="{ active: nav.isActive }"
				@click.prevent="onToggle(index)"
			>
				<span class="icon">
					<component v-if="nav.isActive" :is="nav.icon1" />
					<component v-else :is="nav.icon2" />
				</span>
				<span class="name">{{ nav.name }}</span>
			</router-link>
		</li>
	</ul>
</template>

<script>
	import IconHomeOff from "@/assets/images/menu-home-off.svg";
import IconHomeOn from "@/assets/images/menu-home-on.svg";

	export default {
		components: {
			IconHomeOff,
			IconHomeOn,
		},
		data() {
			return {
				tabNavList: [
					{
						path: "/",
						name: "홈",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						isActive: false,
					},
					{
						path: "/apv",
						name: "결재",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						isActive: false,
					},
					{
						path: "/qm",
						name: "조회",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						isActive: false,
					},
					{
						path: "/tr",
						name: "이체",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						isActive: false,
					},
					{
						path: "/example",
						name: "미정",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						isActive: false,
					},
				],
			};
		},
		computed: {},
		mounted() {
			this.tabNavList[0].isActive = true;
		},
		methods: {
			// 추후변경 => $router.path = true 이면 isActive
			onToggle(index) {
				this.tabNavList.map((item, x) => {
					if (x !== index) {
						item.isActive = false;
					} else {
						item.isActive = true;
					}
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./TabNav.scss";
</style>
