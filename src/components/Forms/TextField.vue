<template>
  <div :class="`fieldset ${align ? 'text-'+align : null}`">
    <div :class="[{ 'form-input': true }, { 'invalid': invalid }, { 'disabled': disabled }]">
      <span v-if="prefix" :class="{ 'prefix': prefix }">
        <slot name='prefix' />
      </span>
      <input v-bind="{ ...$attrs }" @input="$emit('input', $event.target.value)"
        :placeholder="placeholder" :disabled="disabled">
      <!-- svg & img icon -->
      <span v-if="suffix" :class="{ 'suffix': suffix }">
        b
      </span>
    </div>

    <div class="flex justify-between w-100">
      <p v-if="invalid" class="invalid-feedback">
        {{ invalid }}
      </p>
      <p v-if="message" class="help-text">
        {{ message }}
      </p>
    </div>

  </div>
</template>


<script>
// input options + disabled + placeholder
// invalid = '에러출력',
// 입력시 remove, search-icon
// 인풋 내에서 앞(뒤)쪽에 붙는 오브젝트: prefix(suffix) = <template #prefix>아이콘,텍스트</template>
// 필드텍스트정렬: align = 'left', 'right'
// 
export default {
  inheritAttrs: false,
  props: {
    invalid: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    align: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "입력"
    },
    prefix: {
      type: Boolean,
      default: false
    },
    suffix: {
      type: Boolean,
      default: false
    },

  },
  watch: {},
  methods: {},
  // components: { SvgIcon }
}
</script>
