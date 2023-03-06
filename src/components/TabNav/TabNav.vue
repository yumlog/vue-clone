<template>  
  <ul class="tab-nav">
    <li class="tab-nav--item" v-for="(nav,index) in tabNavList" :key="index">
      <button @click.prevent="onToggle(index)">
        <span class="icon">
          <icon-home-on v-if="nav.isActive" />
          <icon-home-off v-else />
        </span>
        <span class="name">{{ nav.name }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
import IconHomeOff from '@/assets/images/menu-home-off.svg';
import IconHomeOn from '@/assets/images/menu-home-on.svg';

export default {
  components: {
    IconHomeOff, IconHomeOn
  },
  data() {
    return {
      tabNavList: [
        {
          path: '',
          name: '홈',
          icon: 'home',
          isActive: false,
        },
        {
          path: '',
          name: '결제',
          icon: 'home',
          isActive: false,
        },
        {
          path: '',
          name: '조회',
          icon: 'home',
          isActive: false,
        },
        {
          path: '',
          name: '이체',
          icon: 'home',
          isActive: false,
        },
        {
          path: '',
          name: '미정',
          icon: 'home',
          isActive: false,
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    onToggle(index) {
      this.tabNavList.map((item, x) => {
        if (x !== index) {
          item.isActive = false
        } else {
          item.isActive = true
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import './TabNav.scss';
</style>