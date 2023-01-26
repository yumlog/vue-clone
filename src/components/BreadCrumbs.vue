<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)"
        :class="{ 'linked': !!breadcrumb.path }">

        {{ breadcrumb.name }}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() { this.updateList() },
  watch: { '$route'() { this.updateList() } },
  methods: {
    routeTo(r) {
      if (this.breadcrumbList[r].path) this.$route.push(this.breadcrumbList[r].name)
    },
    updateList() { this.breadcrumbList = this.$router.options.routes }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul>li {
  display: flex;
  float: left;
  height: 10px;
  width: auto;
  font-weight: bold;
  font-size: .8em;
  cursor: default;
  align-items: center;
}

ul>li:not(:last-child)::after {
  content: '/';
  float: right;
  font-size: .8em;
  margin: 0.5em;
}

.linked {
  cursor: pointer;
  font-size: 1em;
  font-weight: normal;
}
</style>