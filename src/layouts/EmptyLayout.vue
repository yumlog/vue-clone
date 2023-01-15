<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'EmptyLayout',
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
}
</style>