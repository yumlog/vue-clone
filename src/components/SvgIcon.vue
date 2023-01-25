<template>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <use :xlink:href="require(`@/assets/images/icons_${name}.svg`)"></use>
  </svg>
</template>

<script lang="js">
export default {
  name: 'SvgIcon',
  props: {
    name: String
  }
}
</script>