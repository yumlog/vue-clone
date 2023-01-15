<template>
  <div>
    <ul>
      <li v-for="tabItem in tabList">
        <router-link @click="">{{ tabItem }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  components: {},
  props: {},

  data() {
    return {
      tabList: ['tabItem1', 'tabItem2', 'tabItem3'],
    };
  },
}
</script>

<style lang="scss" scoped>
  
</style>