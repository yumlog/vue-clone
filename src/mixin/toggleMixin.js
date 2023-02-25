export default {
	data() {
		return {
			isToggled: false,
		}
	},
	methods: {
		toggle() {
			this.isToggled = !this.isToggled
		},
	},
}
