<template>
  <button @click="$emit('onClick')" class="btn-link">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String
  },
  data() {
    return {
      
    };
  },
}
</script>

<style lang="scss" scoped>
.btn-link {
  color: $black;
  font-size: inherit;
  text-decoration: underline;

  &:is(:hover, :focus) {
    color: lignten($black, 10%);
  }
}
</style>