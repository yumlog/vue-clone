<template>
  <button 
    v-bind="{ ...$attrs }"
    @click="$emit('onClick')"
    :class="`btn btn-${color || 'outline-gray'} btn-${size} ${disabled && 'disabled'} ${block && 'block'}`"
    :disabled="disabled"
    >

    <span :class="prefix" v-if="prefix">
      <slot name="prefix" />
    </span>

    <span class="label">{{ label || 'Label' }}</span>
    
    <span :class="suffix" v-if="suffix">
      <slot name="suffix" />
    </span>

  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    label: [String, Element],
    color: String,
    size: String,
    prefix: {
      type: [String, Boolean],
      default: '',
      required: false
    },
    suffix: {
      type: [String, Boolean],
      default: '',
      required: false
    },
    disabled: {
      type: [String, Boolean],
      default: null,
      required: false 
    },
    block: {
      type: Boolean,
      default: null,
    }
  },
  computed: {
    
  },
}
</script>

<style lang="scss" scoped>

</style>