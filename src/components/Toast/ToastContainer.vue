<template>
  <div v-if="showToast" class="toast-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    toasts: {
      type: []
    },
  },
  data() {
    return {
      toastId: 1,
    }
  },
  mounted() {
  },
  methods: {
    showToast() {
      const newToast = {
        id: this.toastId++,
        open: true,
      };
      this.toasts.push(newToast);
      setTimeout(() => {
        newToast.open = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-container {
  z-index: 20;
  position: fixed;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  padding: 1rem;
  // position
  // &-top {
  //   top: 0;
  // }
  // &-bottom {
  //   bottom: 0;
  // }
}
</style>