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
import IconApvOff from "@/assets/images/menu-apv-off.svg";
import IconApvOn from "@/assets/images/menu-apv-on.svg";
import IconHomeOff from "@/assets/images/menu-home-off.svg";
import IconHomeOn from "@/assets/images/menu-home-on.svg";
import IconQmOff from "@/assets/images/menu-qm-off.svg";
import IconQmOn from "@/assets/images/menu-qm-on.svg";
import IconTrOff from "@/assets/images/menu-tr-off.svg";
import IconTrOn from "@/assets/images/menu-tr-on.svg";
import IconWindowOff from "@/assets/images/menu-window-off.svg";
import IconWindowOn from "@/assets/images/menu-window-on.svg";

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
						icon1: IconApvOn,
						icon2: IconApvOff,
						
					},
					{
						path: "/qm",
						name: "조회",
						icon1: IconQmOn,
						icon2: IconQmOff,
						
					},
					{
						path: "/tr",
						name: "이체",
						icon1: IconTrOn,
						icon2: IconTrOff,
					},
					{
						path: "/example",
						name: "미정",
						icon1: IconWindowOn,
						icon2: IconWindowOff,
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
		methods: {
			logActiveTab() {
				
			},
		},
		watch:{
			'$route.path':{
				immediate: true, // 컴포넌트 생성시 즉시 발생
				
				handler(newValue, oldValue){
					for(let tab of this.tabNavList){
						if(tab.path  === newValue) {
							this.activeTab = tab;
							
							break;
						}
					}
				}
			},
			activeTab(newValue, oldValue) {
				console.log('newValue 변경값', this.tabNavList.indexOf(newValue))
				console.log('oldValue 이전값', this.tabNavList.indexOf(oldValue))
			}
		}
		
	};
</script>

<style lang="scss">
:root {
	--tabnav-h: 57px;
}
</style>

<style lang="scss" scoped>
	@import "./TabNav.scss";
</style>
