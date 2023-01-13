<template>
  <nav class="nav">

    <p>TheHeader Component</p>
    <ul class="flex-list">
      <li v-for="nav in navItems" :key="nav.id">
        <router-link :to="nav.path" :class="{active: isActive}">{{ nav.name }}</router-link>
      </li>
      
    </ul>
  </nav>
  
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      navItems: [
        { id: 1, name: 'home', path: '/'},
        { id: 2, name: 'page1', path: '/page-one'},
        { id: 3, name: 'page2', path: '/page-two'},
      ]
    }
  },
  methods: {
    
  },
}
</script>


<style lang="scss" >
.nav {
  border:2px solid black;
  padding: 1rem;
  margin-bottom:1rem;
}
.flex-list {
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 600px;

  li a {
    display: inline-block;
    padding: 1rem;
  }
}
.router-link-active {
  background-color: red;
}
</style>