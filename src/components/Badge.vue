<template>
  <ul>
    <li v-for="(badge, index) in badges" :key="index" :class="badge.type"><span>{{ badge.name }}</span></li>
  </ul>
</template>

<script>
export default {
  props: {
    badges: [
      { name: String },
      { type: String }
    ]
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    padding: 2px 5px;
    border-radius: 2px;
    &.fill-navy {
      background: #102043;
      color: #fff;
    }
    &.fill-blue {
      background: #326eed;
      color: #fff;
    }
    &.fill-red {
      background: #e71f2a;
      color: #fff;
    }
    &.border-blue {
      background: #fff;
      border: 1px solid #becce9;
      color: #2763f6;
    }
    &.border-navy {
      background: #fff;
      border: 1px solid #d7dde9;
      color: #4b5390;
    }
    &.border-green {
      background: #fff;
      border: 1px solid #ade9ce;
      color: #108852;
    }
    &.border-purple {
      background: #fff;
      border: 1px solid #d9c8ee;
      color: #8542d7;
    }
    &.border-purple {
      background: #fff;
      border: 1px solid #d9c8ee;
      color: #8542d7;
    }
    &.border-pink {
      background: #fff;
      border: 1px solid #f9c0e9;
      color: #d813a2;
    }
    &.border-red {
      background: #fff;
      border: 1px solid #faacb0;
      color: #e71f2a;
    }
    &.round-border-blue {
      background: #fff;
      border: 1px solid #becce9;
      color: #2763f6;
      border-radius: 200px;
    }
    &.round-border-green {
      background: #fff;
      border: 1px solid #ade9ce;
      color: #108852;
      border-radius: 200px;
    }
    &.news {
      font-size: 8px;
      font-weight: 800;
      color: #333;
      border-radius: 100%;
      background: #92ff3e;
    }
    &.number-blue {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border-radius: 100px;
      background: #2763f6;
      padding: 2px 8px;
    }
    &.number-black {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border-radius: 100px;
      background: #333;
      padding: 2px 8px;
    }
    &.number-gray {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border-radius: 100px;
      background: #d3d3d3;
      padding: 2px 8px;
    }
    & + li {
      margin-left: 4px;
    }
  }
}
</style>