<!-- Toast & Notification -->
<template>
  <TransitionGroup name="list">
    <div v-show="open"
      class="toast"
      :key="id"
    >
      <p>{{ message }}</p>
      <!-- <button @click="close">close</button> -->
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
    // color: {
    //   type: [String, Object],
    //   default: 'primary-1'
    // },
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
}
</script>

<style lang="scss" scoped>
@import './Toast.scss';
</style>