<template>
  <div class="base-layout">

    <TheHeader />

    
    <main class="container flex flex-1" style="min-height: 500px;">
      <router-view name="sidebar" />
      <router-view class="w-100" />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/Header/TheHeader.vue";

export default {
  name: 'BaseLayout',
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
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
}
</style>