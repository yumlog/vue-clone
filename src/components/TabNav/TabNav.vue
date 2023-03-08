<template>
	<ul class="tab-nav">
		<li class="tab-nav--item" v-for="(tab, index) in tabNavList" :key="index">
			<router-link
				:to="tab.path"
				:class="{active: isActive(tab.path)}"
				@click.native="activeTab = index"
			>
				<span class="icon">
					<transition name="fade">
						<component v-if="isActive(tab.path)" :is="tab.icon1" />
						<component v-else :is="tab.icon2" />
					</transition>
				</span>
				<span class="name">{{ tab.name }}</span>
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
        activeTab: null,

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
		computed: {
			isActive(){
				return(route)=>{
					return this.$route.path === route;
				}
			}
		},
		watch:{
			'$route.path':{
				immediate: true,
				handler(currentTab){
					for(let tab of this.tabNavList){
						if(tab.path  === currentTab) {
							this.activeTab = tab;
							
							break;
						}
					}
				}
			},
			activeTab(currentTab){
				console.log('currentTab Index =>', this.tabNavList.indexOf(currentTab))
			}
		}
		
	};
</script>

<style lang="scss" scoped>
	@import "./TabNav.scss";
</style>
