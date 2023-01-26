<template>
  <div class="checkbox">
    <input type="checkbox" :id="id" :value="value" v-bind="{ ...$attrs }" />
    <label :for="id">{{ label }}</label>
  </div>
</template>


<style lang="scss" scoped>
.checkbox {
  input {
    appearance: none;
  }
}
</style>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: String,
    value: String,
    label: String
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>