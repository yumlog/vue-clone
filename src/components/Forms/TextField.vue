<template>
  <div class="fieldset" :class="message ? 'text-right' : ''">
    <div :class="[
        { 'form-input': true },
        { 'invalid': invalid },
        { 'disabled': disabled },
        { 'prefix': prefix },
        { 'suffix': suffix },
      ]">
      <span v-show="prefix" class="icon">
        <slot name="prefix" />
      </span>
      <input v-bind="{ ...$attrs }" @input="$emit('value', $event.target.value)"
        :placeholder="placeholder" :disabled="disabled">
      
      <span v-if="unit" class="unit">
        {{ unit }}
      </span>
      <span v-if="suffix" class="icon">
        <slot name="suffix" />
      </span>
    </div>

    <div class="flex justify-between">
      <p v-if="invalid" class="invalid-feedback shrink-0">
        {{ invalid }}
      </p>
      <p v-if="message" class="help-text w-100" style="justify-self: flex-end;">
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
      default: '',
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
    unit: String,
  },
  watch: {},
  methods: {},
  // components: { SvgIcon }
}
</script>
