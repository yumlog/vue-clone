<template>
	<div>
		<section v-for="(item, index) in toggleboxs" :key="index">
			<button @click="onToggle(index)">
				{{ item.name }}
			</button>
			<article v-show="item.isOpen">
				{{ item.message }}
			</article>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			toggleboxs: [
				{ isOpen: false, name: "버튼1", message: "1번 토글" },
				{ isOpen: false, name: "버튼2", message: "2번 토글" },
				{ isOpen: false, name: "버튼3", message: "3번 토글" },
				{ isOpen: false, name: "버튼4", message: "4번 토글" },
				{ isOpen: false, name: "버튼5", message: "5번 토글" },
			],
		};
	},

	mounted() {
		this.toggleboxs[0].isOpen = true;
	},

	methods: {
		onToggle(index) {
			// 클릭한 요소만 열리고 나머지 닫힘
			this.toggleboxs.forEach((item, x) => {
				if (x !== index) {
					item.isOpen = false;
				} else {
					item.isOpen = true;
				}
			});
			// this.toggleboxs[index].isOpen = !this.toggleboxs[index].isOpen
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
