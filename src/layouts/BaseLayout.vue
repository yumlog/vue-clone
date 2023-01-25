<template>
  <div class="base-layout">

    <TheHeader />

    
    <main class="container flex flex-1">
      <router-view name="left" style="width: 300px" />
      <router-view class="w-100">
        container
      </router-view>
      <router-view name="right" style="width: 300px" />
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