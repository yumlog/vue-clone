<template>
	<div class="slider-wrapper">
		<input type="range" class="styled-slider slider-progress" id="baseSlider" v-bind="{...$attrs}" @input="updateInput" list="values" style="" />
		<datalist id="values">
			<option v-for="(option, index) in options" :key="index" :value="option.value" :label="option.label" v-bind="{...$attrs}"></option>
		</datalist>
	</div>
</template>

<script>
export default {
	props: {
		options: [],
	},
	data() {
		return {
			
		};
	},
	mounted() {
		for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
			e.style.setProperty('--value', e.value);
			e.style.setProperty('--min', e.min == '' ? '0' : e.min);
			e.style.setProperty('--max', e.max == '' ? '100' : e.max);
			e.addEventListener('input', () => e.style.setProperty('--value', e.value));
		}
	},
	methods: {
		updateInput($event) {
			this.$emit('input', $event.target.value, $event);
			if ($event.target.value < 1) {
				this.$emit('input', $event.target.value = 1);
			}
		}
	},
};
</script>

<style lang="scss" scoped>
div.slider-wrapper {
	width: 100%;
}
input[type=range].styled-slider {
	width: 100%;
	appearance: none;
	margin: 0;
	&:focus {
		outline: none;
	}
	&::-webkit-slider-thumb {
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background: $white;
		border: 1px solid $gray-600;
		box-shadow: 0 2px 8px rgba(174, 190, 228, 0.3);
		margin-top: calc(8px * 0.5 - 20px * 0.5);
		cursor: pointer;
		appearance: none;
	}
	&::-webkit-runnable-track {
		height: 8px;
		border: none;
		border-radius: 100px;
		background: $blue-7;
		box-shadow: none;
	}
	&::-moz-range-track {
		height: 8px;
		border: none;
		border-radius: 100px;
		background: $blue-7;
		box-shadow: none;
	}
	&::-ms-fill-upper {
		background: transparent;
		border-color: transparent;
	}
	&::-ms-fill-lower {
		background: transparent;
		border-color: transparent;
	}
	&::-ms-thumb {
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background: $white;
		border: 1px solid $gray-600;
		margin-top: 0;
		box-sizing: border-box;
	}
	&::-ms-track {
		height: 8px;
		border-radius: 100px;
		background: $blue-7;
		border: none;
		box-shadow: none;
		box-sizing: border-box;
	}
	&.slider-progress {
		--range: calc(var(--max) - var(--min));
		--ratio: calc((var(--value) - var(--min)) / var(--range));
		--sx: calc(0.5 * 20px + var(--ratio) * (100% - 20px));
		&::-webkit-slider-runnable-track {
			background: linear-gradient($blue-1, $blue-1) 0/var(--sx) 100% no-repeat, $blue-7;
			height: 8px;
			border-radius: 100px;
		}
		&::-moz-range-track {
			background: linear-gradient($blue-1, $blue-1) 0/var(--sx) 100% no-repeat, $blue-7;
			height: 8px;
			border-radius: 100px;
		}
		&::-ms-fill-lower {
			height: 8px;
			border-radius: 100px 0 0 100px;
			margin: -undefined 0 -undefined -undefined;
			background: $blue-1;
			border: none;
			border-right-width: 0;
		}
	}
}
datalist {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 6px;
	color: $gray-300;
	option {
		width: 20px;
		font-size: $text-sm;
		text-align: center;
		padding: 0;
	}
}
</style>

<!--
	[사용 예시]

	1. Html
	<BaseSlider :min="min" :max="max" :step="step" :value="value" v-model="value" :options="options" />

	2. Script
	data() {
		return {
			min: 0,
			max: 12,
			step: 4,
			value: 4,
			options: [
				{ id: 0, value: 1, label: '1' },
				{ id: 1, value: 4, label: '4' },
				{ id: 2, value: 8, label: '8' },
				{ id: 3, value: 12, label: '12' },
			],
		}
	}

	3. Etc
	현재 값을 표시해야 할 경우 <p>{{ value }}</p>

	참고 사이트
	toughengineer.github.io/demo/slider-styler/slider-styler.html
-->