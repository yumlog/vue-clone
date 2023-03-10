<template>
	<div class="tab-wrap">
		<ul class="tabs">
			<TabItem
				v-for="item in list"
				v-bind="item"
				:key="item.id"
				v-model="currentID"
			/>
		</ul>
		<div class="tab-content">
			<transition>
				<section :key="currentID" class="item">
					{{ current.content }}
				</section>
			</transition>
		</div>
	</div>
</template>

<script>
import TabItem from "./Tab.vue";
export default {
	components: { TabItem },
	data() {
		return {
			currentID: 1,
			list: [
				{ id: 1, label: "Tab1", content: "콘텐츠11111" },
				{ id: 2, label: "Tab2", content: "콘텐츠2" },
				{ id: 3, label: "Tab3", content: "콘텐츠3" },
			],
		};
	},
	computed: {
		current() {
			return this.list.find((el) => el.id === this.currentID) || {};
		},
	},
};
</script>

<style lang="scss" scoped>
.tabs {
	display: flex;
	width: 100%;

	> li {
		width: 100%;
	}
}
.tab-content {
	padding-top: 40px;

	> section {
		transition: all 0.1s;
	}
}

.v-leave-active {
	position: absolute;
}
.v-enter {
	opacity: 0;
}
.v-leave-to {
	opacity: 1;
}
</style>
