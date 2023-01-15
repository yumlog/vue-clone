<template>
  <div>
    <OneHeader />
    <router-view />
  </div>
</template>

<script>
// import VueSvg from  '@/assets/test.svg'

import OneHeader from './OneHeader.vue';

export default {
    name: "One",
    components: { OneHeader }
}
</script>
