<template>
	<keep-alive>
		<component :is="layout">
			<router-view />
		</component>
	</keep-alive>
</template>

<script>
const defaultLayout = 'BaseLayout'

export default {
  name: 'AppLayout',
  computed: {
    layout () {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>
