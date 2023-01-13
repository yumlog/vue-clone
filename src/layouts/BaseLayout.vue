<template>
  <div class="base-layout">
    <p>BaseLayout</p>
    <TheHeader />
    <main class="main">
      <h1>Contents</h1>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'BaseLayout',

  components: {
    TheHeader,
    TheFooter
}
}
</script>

<style lang="scss" scoped>
.base-layout {
  height: 100vh;
  background-color: bisque;
}
.main {
  border: 2px solid black;
  background-color: white;
  overflow: hidden;
}
</style>