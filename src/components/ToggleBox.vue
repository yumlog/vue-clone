<template>
  <div>
    <button class="btn btn-outline-black" @click="toggle">Toggle</button>
    <div v-show="isToggled">
      {{ message }}
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixin/toggleMixin.js';

export default {
  name: 'ToggleBox',
  mixins: [toggleMixin],
  props: {
    message: {
      type: [String, Object],
      default: '토글 테스트'
    }
  },
}
</script>
