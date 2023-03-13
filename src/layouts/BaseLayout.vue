<template>
	<div class="base-layout">
		<!-- appbar -->
		<appbar @toggle="handleMenu" />

		<transition name="menu" appear>
			<Sidebar v-show="showMenu" class="menu" @close="showMenu = false" />
		</transition>

		<main class="main">
			<Transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
				<router-view />
			</Transition>
		</main>

		<!-- tabnav -->
		<tab-nav />
	</div>
</template>

<script>
import Appbar from "@/components/Appbar/Appbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import TabNav from "@/components/TabNav/TabNav.vue";

const DEFAULT_TRANSITION = '';

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
			prevHeight: 0,
      		transitionName: DEFAULT_TRANSITION,
		};
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
		let transitionName = to.meta.transitionName || from.meta.transitionName;

		if (transitionName === 'slide') {
			const toDepth = to.path.split('/').length;
			const fromDepth = from.path.split('/').length;
			transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
		} else if (transitionName === 'fade') {
			this.transitionName = transitionName;
		}

		this.transitionName = transitionName || DEFAULT_TRANSITION;

		next();
		});
 	},
	methods: {
		handleMenu() {
			this.showMenu = !this.showMenu;
		},
		beforeLeave(element) {
        	this.prevHeight = getComputedStyle(element).height;
		}
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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
