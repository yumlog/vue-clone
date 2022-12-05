<template>
  <div id="app">
    <GlobalNav />
    <router-view></router-view>
  </div>
</template>

<script>
import GlobalNav from "./components/GlobalNav.vue";
  import "./assets/global.scss";

  export default {
    name: "App",
    components: {
      GlobalNav
    }
  }
</script>
