<template>
  <header class="app-bar" @scroll="handleScroll" :class="setScroll ? 'active': ''">
    <nav>
      <button class="btn">icon</button>
      <router-link to="/" class="logo"><img inline src="@/assets/images/logo_wrap.svg" alt="신협" /></router-link>
      <button class="btn menu-toggler" @click="toggle">
        {{ !isOpen ? 'Burger' : 'Close' }}
      </button>
    </nav>

    <transition name="menu" appear>
      <Sidebar v-if="isOpen" class="menu">
        안녕하세요
      </Sidebar>
    </transition>
  </header>
</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import toggleMixin from '@/mixin/toggleMixin';


let winScroll = window.scrollY

export default {
  name: "AppHeader",
  components: { BaseButton, Sidebar },
  mixins: [toggleMixin],
  // vue-meta 테스트
  metaInfo: {
    title: '신협이에요!',
    // titleTemplate: '%s | ...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { vmid: "description", name: "description", content: 'description' }
      // vmid: Unique Metadata, index.html 에서 설정한 메타와 중복되지 않게 하기 위함
      // index meta - component meta 순으로 노출
    ]
  },
  data() {
    return {
      setScroll: false
    }
  },
  
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

    
  methods: {
    handleScroll() {
      // const header = document.querySelector('.app-header');
      const headerScroll = window.scrollY;
      // console.log(`스크롤: ${winScroll}`)

      // Top으로 올리면 header가 내려옴
      if (winScroll >= headerScroll) {
        this.setScroll = true
      } else {
        this.setScroll = false
      }
      return winScroll = headerScroll
    },
  },
  
}
</script>


<style lang="scss" scoped>
@import './Appbar.scss';
</style>