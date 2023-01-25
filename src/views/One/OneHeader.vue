<template>
  <div>
    <h5>OnePage Header: {{ oneId }}</h5>
    <p>나는 헤더입니다</p>
  </div>
</template>

<script>
  export default {

    data() {
      return {
      }
    },

    computed: {
      oneId() {
        return this.$route.params.id
      },
    },
  }
</script>

