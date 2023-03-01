<template>
  <div class="base-layout">
    <app-header />
    <main class="main">
      <div class="container">
        <BreadCrumbs />
      </div>
      <router-view />
    </main>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import AppHeader from '@/components/Header/AppHeader.vue'

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    BreadCrumbs
  },
  computed: {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.base-layout {
  height: auto;
  .sidebars {
    display: flex;
    justify-content: space-between;
  }
  .main {
    position: relative;

  }
}
</style>
