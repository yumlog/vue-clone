<template>
  <ul class="global-nav">
    <li class="navItem" v-for="route in navRoutes.slice(2, 11)" :key="route.path" @click="toggleNav">
      <router-link :to="route.path" exact-path>{{ route.name }}</router-link>

      <!-- sub -->
      <!-- <ul class="subnav" v-show="route.children">
          <li v-for="childNav in route.children" :key="childNav.index">
            <router-link :to="childNav.path" exact-path>{{ childNav.name }}</router-link>
          </li>
        </ul> -->
    </li>
  </ul>

</template>

<script>
export default {
  name: 'GlobalNav',

  data() {
    return {
      active: false,
      pageId: this.$route.params.id,

    }
  },

  computed: {
    navRoutes() {
      return this.$router.options.routes
    },
  },

  methods: {
    toggleNav: function () {
      this.active = !this.active
    },

  }
}
</script>

<style lang="scss" scoped>
.global-nav {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin: auto;
  color: $black;

  .navItem a {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    padding: 10px 30px;

    &.router-link-active {
      color: var(--primary-1);
      font-weight: 700;
    }
  }
}

// .subnav {
//   border:2px solid blue;

//   li a {
//     &.router-link-active {
//       background-color: blue;
//     }
//   }
// }
</style>