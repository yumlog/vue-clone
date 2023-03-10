<template>
	<div class="fieldset" :class="message ? 'text-right' : ''">
		<div
			style="position: relative; height: 57px;display:flex; flex-direction: column; justify-content: flex-end;width:100%">
			<!-- input focus시, label: true -->
			<transition name="focus" appear>
				<label v-if="focusOn && label" :for="id">{{ label }}</label>
			</transition>
			<div
				:class="[
					{ 'form-input': true },
					{ 'invalid': invalid },
					{ 'disabled': disabled },
					{ 'prefix': prefix },
					{ 'suffix': suffix },
					{ 'text-right': unit },
				]">
				<span v-if="prefix" class="icon">
					<slot name="prefix" />
				</span>

				<input
					v-bind="{ ...$attrs }" :id="id" :placeholder="placeholder" :aria-placeholder="placeholder"
					:invalid="invalid" :aria-invalid="invalid" :disabled="disabled" style="text-align: inherit" @input="updateInput"
					v-on="{ ...$listeners, input: () => { } }" @focus="focusOn = true" @blur="focusOn = false" />

				<span v-if="unit" class="unit">
					{{ unit }}
				</span>

				<span v-if="suffix" class="icon">
					<slot name="suffix" />
				</span>
			</div>
		</div>

		<!-- message & invalid -->
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
			id: {
				type: String,
			},
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
			unit: {
				type: [String, Boolean],
				default: false,
			},
		},
		data() {
			return {
				focusOn: false,
			};
		},
		methods: {
			updateInput($event){
				this.$emit('input', $event.target.value, $event);
			}
		},
	};
</script>
