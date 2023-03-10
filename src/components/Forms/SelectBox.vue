<template>
	<div class="fieldset">
		<div :class="['form-input', { invalid: invalid }, { disabled: disabled }]">
			<select
				v-bind="{ ...$attrs }"
				:placeholder="placeholder"
				:disabled="disabled"
				@change="$emit('onChange', $event.target.value)"
			>
				<option
					v-for="option in options"
					:key="option.index"
					:value="option.value"
				>
					{{ option.label }}{{ unit }}
				</option>
			</select>
		</div>
		<div class="flex justify-between">
			<p v-if="invalid" class="invalid-feedback shrink-0">
				{{ invalid }}
			</p>
			<p
				v-if="message"
				class="help-text text-right w-100"
				style="justify-self: flex-end"
			>
				{{ message }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		options: [],
		label: {
			type: String,
			default: "label",
		},
		unit: {
			type: String,
			default: "",
		},
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
			default: "",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: "입력",
		},
	},
	data() {
		return {};
	},

	methods: {
		onChange: function (value) {
			if (value === "") {
				value = null;
			}
			this.$emit("input", value);
		},
	},
};
</script>
