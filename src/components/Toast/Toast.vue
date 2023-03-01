<!-- Toast & Notification -->
<template>
  <TransitionGroup name="list">
    <div v-show="open" class="toast" :class="`bg-${color}`" :key="id">
      <p>{{ message }}</p>
      <button @click="close">close</button>
    </div>
  </TransitionGroup>
</template>

<script>
export default {
  props: {
    message: {
      type: [String, Object],
      default: '토스트 메세지 출력'
    },
    color: {
      type: [String, Object],
      default: 'primary-1'
    },
    open: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    }
  },

  methods: {
    close() {
      this.$emit('close')
    },


  },
};
</script>

<style lang="scss">
.toast-container {
  z-index: 20;
  position: fixed;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // position
  // &-top {
  //   top: 0;
  // }
  // &-bottom {
  //   bottom: 0;
  // }
}
</style>

<style lang="scss" scoped>
.toast {
  background-color: var(--black);
  border-radius: 6px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;

  >* {
    color: inherit;
  }
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>