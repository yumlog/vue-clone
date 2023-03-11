<template>
	<button
		v-bind="{ ...$attrs }"
		v-on="$listeners"
		class="btn"
		:class="[
			`btn-${color}`,
			size ? `btn-${size}` : '',
			{ block: block },
		]"
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
