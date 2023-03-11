<template>
	<button
		v-bind="{ ...$attrs }"
		class="btn"
		:class="[`btn-${color}`, size ? `btn-${size}` : '', { block: block }]"
		v-on="$listeners"
	>
		{{ label }}
		<slot></slot>
	</button>
</template>

<script>
export default {
	inheritAttrs: true,
	props: {
		label: {
			type: String,
		},
		color: {
			type: String,
			default: "outline-gray",
		},
		size: {
			type: String,
			default: "",
		},
		block: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped></style>
