<template>  
  <ul class="tab-nav">
    <li class="tab-nav--item" v-for="nav in tabNavList" :key="nav.index">
      <router-link :to="nav.path">
        <span class="icon">
          <IconHome />
        </span>
        <span class="name">{{ nav.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import IconHome from '@/assets/images/menu-home-off.svg';

export default {
  components: {
    IconHome
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