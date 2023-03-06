<template>
  <header class="app-bar" @scroll="handleScroll" :class="setScroll ? 'active': ''">
    <nav v-if="this.$route.path === '/'">
      <!-- start -->
      <div class="actions start">
        <button class="dropdown-logo">
          <h1 class="logo"><img src="@/assets/images/pig1.png" alt="로고"></h1>
          <span>함께해요어부바</span>
        </button>
      </div>
      <!-- end -->
      <div class="actions end">
        <button class="btn noti" @click="setFlag = !setFlag">
          <span class="new-flag" v-if="setFlag = true" />
          <iconNoti />
        </button>
        <button class="btn menu-toggler" @click="toggle">
          <iconMenu />
        </button>
      </div>
    </nav>

    <nav v-else>
      <!-- start -->
      <div class="actions start">
        <button class="btn">
          <iconNoti />
        </button>
      </div>

      <router-link to="/" class="title">{{ this.$route.name }}</router-link>
      
      <!-- end -->
      <div class="actions end">
        <button class="btn menu-toggler" @click="toggle">
          <iconMenu />
        </button>
      </div>
    </nav>

    <transition name="menu" appear>
      <Sidebar v-if="isOpen" class="menu">
        안녕하세요
      </Sidebar>
    </transition>
  </header>
</template>

<script>
import iconMenu from '@/assets/images/icon_24/appbar_menu.svg';
import iconNoti from '@/assets/images/icon_24/appbar_noti.svg';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import toggleMixin from '@/mixin/toggleMixin';


let winScroll = window.scrollY

export default {
  name: "AppHeader",
  components: { BaseButton, Sidebar, iconMenu, iconNoti },
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
      setScroll: false,
      setFlag: true,
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