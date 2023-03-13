<template>
	<div class="fieldset">
		<div class="form-check">
			<input type="checkbox" :value="value" @click="toggleChecked"/>
			<label :for="id">{{ label }}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "Checkbox",
	props: {
		value: Boolean,
		label: String,
	},

	mounted() {},

	methods: {
		toggleChecked() {
			this.$emit('input', !this.value)
		}
	},
};
</script>