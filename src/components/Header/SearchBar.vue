<template>
  <div class="search-bar">
    SearchBar
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style lang="scss" scoped>
.search-bar {
  background-color: var(--white);
  width: 100%;
  position: absolute;
  top: var(--header-height);
  background-color: var(--white);
  z-index: 1;
}

</style>