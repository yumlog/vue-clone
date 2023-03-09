<template>
	<div class="checkbox">
		<input
			:id="id"
			type="checkbox"
			:value="value"
			v-bind="{ ...$attrs }"
		>
		<label :for="id">{{ label }}</label>
	</div>
</template>


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

<style lang="scss" scoped>
.checkbox {
  input {
    appearance: none;
  }
}
</style>