<template>
	<div class="fieldset">
		<div class="field-container">
			<!-- input focus시, label: true >> Only 회원가입 화면 -->
			<!-- 
				<transition name="focus" appear>
				<label v-if="focusOn && label" :for="id">
					{{ label }}
					<strong v-if="required" class="text-red">*</strong>
				</label>
			</transition>
		-->
			<label v-if="label" :for="id">
				{{ label }}
				<strong v-if="required" class="text-red">*</strong>
			</label>
			<div
				:class="[
					{ 'form-input': true },
					{ invalid: invalid },
					{ disabled: disabled },
					{ prefix: prefix },
					{ suffix: suffix },
					{ unit: unit },
				]"
			>
				<span v-if="prefix" class="icon">
					<slot name="prefix" />
				</span>

				<input
					:value="value"
					v-on:input="updateInput"
					v-bind="{ ...$attrs }"
					:id="id"
					:placeholder="placeholder"
					:aria-placeholder="placeholder"
					:invalid="invalid"
					:aria-invalid="invalid"
					:disabled="disabled"
					:required="required"
					:aria-required="required"
					style="text-align: inherit"
					@focus="focusOn = true"
					@blur="focusOn = false"
					ref="inputRef"
				/>
				<button class="btn-clear" @click="resetInput">
					<img
						inline
						src="@/assets/images/icon_24/close-circle.svg"
						alt="재입력"
					/>
				</button>

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
	props: {
		value: {
			type: String,
		},
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
		disabled: {
			type: Boolean,
			default: false,
		},
		required: {
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
		updateInput: function (event) {
			this.$emit('input', event.target.value);
		},

		// reset
		resetInput() {
			this.value = "";
			return this.value.focus();
		},
	},
};
</script>
