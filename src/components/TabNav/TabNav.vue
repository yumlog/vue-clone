<template>
	<ul class="tab-nav">
		<li class="tab-nav--item" v-for="(nav, index) in tabNavList" :key="index">
			<router-link
				:to="nav.path"
        :active="activeTab === index"
				@click.native="activeTab = index"
			>
				<span class="icon">
					<component v-if="activeTab === index" :is="nav.icon1" />
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
        activeTab: 0,
				tabNavList: [
					{
						path: "/home",
						name: "홈",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
					},
					{
						path: "/apv",
						name: "결재",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						
					},
					{
						path: "/qm",
						name: "조회",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
						
					},
					{
						path: "/tr",
						name: "이체",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
					},
					{
						path: "/example",
						name: "미정",
						icon1: IconHomeOn,
						icon2: IconHomeOff,
					},
				],
			};
		},
		computed: {},
		
	};
</script>

<style lang="scss" scoped>
	@import "./TabNav.scss";
</style>
