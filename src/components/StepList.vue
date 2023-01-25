<template>
  <ul>
    <li v-for="(step, index) in steps" :key="index" :class="step.type"><span>{{ step.name }}</span></li>
  </ul>
</template>

<script>
export default {
  name: 'StepList',
  props: {
    steps: [
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
  align-items: center;
  li {
    position: relative;
    padding: 8px 12px;
    background: #f2f2f2;
    font-size: 14px;
    font-weight: 700;
    border-radius: 100%;
    span {
      color: #555;
      text-align: center;
    }
    &+li {
      margin-left: 8px;
    }
    &.active {
      background: #102043;
      margin: 0 34px 0 42px;
      border-radius: 200px;
      &:before,
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 26px;
        height: 1px;
        background: #d3d3d3;
        margin: 0 8px;
        top: 50%;
      }
      &:before {
        left: -42px;
      }
      &:after {
        right: -42px;
      }
      &:first-child {
        margin-left: 0;
        &:before {
          display: none;
        }
      }
      &:last-child {
        margin-right: 0;
        &:after {
          display: none;
        }
      }
      span {
        display: flex;
        align-items: center;
        color: #fff;
        &:before {
          content: "";
          display: inline-block;
          width: 16px;
          height: 16px;
          //체크아이콘
          background: rgba(255,255,255,.3);
          margin-right: 4px;
        }
      }
    }
  }
}
</style>