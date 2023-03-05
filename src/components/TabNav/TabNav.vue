<template>  
  <ul class="tab-nav">
    <li class="tab-nav--item" v-for="nav in tabNavList" :key="nav.index">
      <router-link :to="nav.path">
        <span class="icon">
          <icon-home-off v-if="!nav.active" />
          <icon-home-on v-else />
        </span>
        <span class="name">{{ nav.name }}</span>
      </router-link>
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
          path: '#',
          name: '홈',
          icon: 'home',
          active: false,
        }
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import './TabNav.scss';
</style>