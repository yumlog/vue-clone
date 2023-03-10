<template>
	<div v-if="showToast" class="toast-container">
		<slot />
	</div>
</template>

<script>
export default {
  props: {
    toasts: {
      type: Array
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
      toasts.push(newToast);
      setTimeout(() => {
        newToast.open = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Toast.scss';
</style>