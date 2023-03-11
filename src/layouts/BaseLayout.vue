<template>
	<div class="base-layout">
		<!-- appbar -->
		<appbar @toggle="handleMenu" />

		<transition name="menu" appear>
			<Sidebar v-show="showMenu" class="menu" @close="showMenu = false" />
		</transition>

		<main class="main">
			<router-view />
		</main>

		<!-- tabnav -->
		<tab-nav />
	</div>
</template>

<script>
import Appbar from "@/components/Appbar/Appbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import TabNav from "@/components/TabNav/TabNav.vue";

export default {
	name: "BaseLayout",
	components: {
		Appbar,
		TabNav,
		Sidebar,
	},
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		handleMenu() {
			this.showMenu = !this.showMenu;
		},
	},
};
</script>

<style lang="scss" scoped>
.base-layout {
	.sidebars {
		display: flex;
		justify-content: space-between;
	}
	.main {
		position: relative;
	}
}
.menu {
	z-index: 50;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--white);
	color: var(--black);
}

.menu-enter-active,
.menu-leave-active {
	transition: transform 0.3s ease;
}

.menu-enter,
.menu-leave-to {
	// opacity: 0;
	transform: translateX(100%);
}
</style>
