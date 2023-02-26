<template>
  <aside class="sidebar">
    <nav>
      <ul v-if="this.$route.path === menulist.route">
        <li v-for="route in menulist" :key="route">
          <router-link :to="route.path">{{ route.name }}</router-link>
          <ul class="ml-2">
            <li v-for="child in route.children" :key="child">
              <router-link :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SidebarNav',

  data() {
    return {
      menulist: this.$router.options.routes
    };
  },

  created() {
  },


  mounted() {
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 300px;
  min-height: 500px;
  border: 2px solid blue;
}
</style>