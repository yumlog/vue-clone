<template>
  <button v-bind="{ ...$attrs }" @click="$emit('onClick')" class="btn"
    :class="[`btn-${color}`, size ? `btn-${size}` : '', { 'disabled': disabled }, { 'block': block }]" :disabled="disabled">

    <span v-if="isSlotPrefix" class="prefix">
      <slot name="prefix" />
    </span>
    <span class="label">{{ label || 'Label' }}</span>
    <span v-if="isSlotSuffix" class="suffix">
      <slot name="suffix" />
    </span>

  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  isSlotVisible: false,
  props: {
    label: String,
    color: {
      type: String,
      default: 'outline-gray'
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSlotPrefix() {
      return this.$slots.prefix ? true : false;
    },
    isSlotSuffix() {
      return this.$slots.suffix ? true : false;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>