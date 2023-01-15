<template>
  <div>
    <nav class="nav">
      <ul class="flex-list">
        <li v-for="(nav, index) in navItems" :key="index">
          <router-link :to="nav.path" :class="{ active: nav.path === $route.path }">{{ nav.name }}</router-link>
        </li>
      </ul>
  
    </nav>
    
  </div>
  
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      navItems: [
        { name: 'home', path: '/' },
        { name: 'one', path: '/one' },
        { name: 'two', path: '/two' },
        { name: 'Example', path: '/example' },
      ]
    }
  },
  computed: {
    
  },
  methods: {
    
  },
}
</script>


<style lang="scss" scoped>
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
    &.active {
      background-color: red;
    }
  }
}
</style>