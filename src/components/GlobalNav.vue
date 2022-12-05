<template>
  <ul class="flex-list">
    <li v-for="nav in navItems" :key="nav.id">
      <router-link :to="nav.path">{{ nav.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GlobalNav',
  data() {
    return {
      navItems: [
        { id: 1, name: 'home', path: '/'},
        { id: 2, name: 'page1', path: '/page-one'},
        { id: 3, name: 'page2', path: '/page-two'},
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.flex-list {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 600px;

  li a {
    display: inline-block;
    padding: 1rem;
  }
}
</style>