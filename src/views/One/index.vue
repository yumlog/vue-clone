<template>
  <div>
    <OneHeader />
    <p>One Index</p>
    <router-view />
  </div>
</template>

<script>
import OneHeader from './OneHeader.vue';

export default {
  name: "One",
  components: { OneHeader },
}
</script>
