<template>
  <aside class="aside">
    <h1>AsideNav</h1>
    <ul>
      <li v-for="(item, index) in sidenav" :key="index">{{ item.name }}</li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
     sidenav: [
      {name: 'sidebar item'},
      {name: 'sidebar item'},
      {name: 'sidebar item'},
      {name: 'sidebar item'},
     ] 
    }
  },
}
</script>

<style lang="scss" scoped>
.aside {
  background-color: white;
  width: 100%;
  max-width: 300px;
  border:2px solid black;
  padding: 1rem;
}
</style>