<template>
  <div class="custom-layout">
    <p>CustomLayout</p>
    <TheHeader />
    <div style="display:flex">

      <SidebarNav />
      <main style="border:2px solid black;background-color: white;">
        <h1>Contents</h1>
        <router-view />
      </main>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SidebarNav from "@/components/SidebarNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: 'CustomLayout',
  components: {
    TheHeader,
    SidebarNav,
    TheFooter
}
}
</script>

<style lang="scss" scoped>
.custom-layout {
  height: 100vh;
  background-color: rgb(162, 215, 250);
}
</style>