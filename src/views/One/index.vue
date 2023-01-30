<template>
  <div>
    <h5>OnePage Index: {{ oneId }}</h5>
    <p>{{ this.$route.path }}</p>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "One",
  computed: {
    oneId() {
      return this.$router.currentRoute.name
    },
  },
}
</script>
