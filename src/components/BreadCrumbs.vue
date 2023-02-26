<template>
  <ol class="breadcrumb">
    <li><router-link :to="{ path: '/' }">메인</router-link></li>
    <!-- items -->
    <li v-for="(crumb, index) in breadcrumbItems" :key="index">
      <span v-if="crumb.isActive">{{ crumb.text }}</span>
      <router-link v-else :to="crumb.link">{{ crumb.text }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  computed: {
    breadcrumbItems() {
      const route = this.$route;
      const matchedRoutes = route.matched;
      const breadcrumbItems = matchedRoutes.map((matchedRoute) => {
        return {
          text: matchedRoute.meta.breadcrumb,
          link: matchedRoute.path,
          isActive: matchedRoute.path === route.path,
        };
      });
      return breadcrumbItems;
    },

    // 2
    // breadcrumbItems() {
      // const route = this.$route;
      // const matchedRoutes = route.matched;
      // const breadcrumbItems = matchedRoutes.map((matchedRoute) => {
      //   const text = matchedRoute.meta.breadcrumb;
      //   const link = matchedRoute.path;
      //   const isActive = matchedRoute.path === route.path;
      //   return { text, link, isActive };
      // });
      // Add breadcrumb items for child routes
      // if (matchedRoutes.length > 1) {
      //   const childCrumb = {
      //     text: matchedRoutes[matchedRoutes.length - 1].meta.breadcrumb,
      //     link: route.path,
      //     isActive: true,
      //   };
      //   breadcrumbItems.push(childCrumb);
      // }
      // return breadcrumbItems;
    // },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  margin: 10px;
  font-size: 14px;
}
.breadcrumb li {
  display: inline-flex;
  & + li {
    padding-left: 10px;
    &::before {
      content: '>';
      margin-right: 10px;
    }
  }
}
.breadcrumb li a {
  display: inline-block;
  color: var(--black);
  text-decoration: none;
}

.breadcrumb li a:hover {
  color: var(--gray-3);
  text-decoration: underline;
}
.breadcrumb li .active {
  color: var(--primary-1);
  font-weight: bold;
}
</style>
