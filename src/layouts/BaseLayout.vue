<template>
	<div class="base-layout">
		<!-- appbar -->
		<appbar />
  
		<main class="main">
			<router-view />
		</main>

		<!-- tabnav -->
		<tab-nav />
	</div>
</template>

<script>
import Appbar from '@/components/Appbar/Appbar.vue';
import TabNav from '@/components/TabNav/TabNav.vue';
// import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
  name: 'BaseLayout',
  components: {
    Appbar,
    TabNav
  },
  
}
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

</style>
