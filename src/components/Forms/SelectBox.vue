<template>
  <div class="fieldset">
    <div class="form-input">
      <select :value="value" @change="onChange($event.target.value)">
        <option v-for="option in options" :key="option.index" :value="item.label">
          {{ option.value }}{{ unit }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  methods: {
    onChange: function (value) {
      if (value === '') {
        value = null;
      }
      this.$emit('input', value);
    }
  },

  props: ['options', 'value', 'unit']
}
</script>