<template>
  <div class="base-layout">
    <TheHeader />
    <main class="main">
      <div class="container">
        <BreadCrumbs />
      </div>
      <div class="container flex flex-1">
        <router-view name="sidebar" />
        <router-view class="w-100" />
      </div>

    </main>

  </div>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import TheHeader from "@/components/Header/TheHeader.vue";

export default {
  name: 'BaseLayout',
  components: {
    TheHeader,
    BreadCrumbs
},
  computed: {
    
  },
  methods: {},
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
    top: 148px;
  }
}
</style>