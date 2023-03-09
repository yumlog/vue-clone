<template>
	<div class="fieldset" :class="message ? 'text-right' : ''">
		<label v-if="label" :for="$attrs.id">{{ label }}</label>

		<div
			:class="[
				{ 'form-input': true },
				{ invalid: invalid },
				{ disabled: disabled },
				{ prefix: prefix },
				{ suffix: suffix },
			]"
		>
			<span v-show="prefix" class="icon">
				<slot name="prefix" />
			</span>
			<input
				v-bind="{ ...$attrs }"
				:placeholder="placeholder"
				:aria-placeholder="placeholder"
				:invalid="invalid"
				:aria-invalid="invalid"
				:disabled="disabled"
				@input="updateInput"
				v-on="{ ...$listeners, input: () => {} }"
			>

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
			<p v-if="message" class="help-text w-100" style="justify-self: flex-end">
				{{ message }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		inheritAttrs: true,
		props: {
			label: {
				type: String,
			},
			invalid: {
				type: String,
			},
			message: {
				type: String,
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
			prefix: {
				type: Boolean,
				default: false,
			},
			suffix: {
				type: Boolean,
				default: false,
			},
			unit: String,
		},
		watch: {},
		methods: {
			updateInput($event){
				this.$emit('input', $event.target.value, $event);
			}
		},
	};
</script>
