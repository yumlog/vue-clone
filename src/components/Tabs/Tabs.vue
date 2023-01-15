<template>
  <div>
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ active: tab.isActive }">
        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
      </li>
    </ul>

    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;

  >li {
    a {
      padding: 1rem;
    }
    &.active a{
      background-color: var(--gray-3);
    }
  }

}
</style>