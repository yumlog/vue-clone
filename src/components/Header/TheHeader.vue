<template>
  <div>
    <header class="global-header" v-on:scroll="handleScroll">
      <!-- load -->
      <span class="loading" v-if="isLoading" />
      <!-- top nav -->

      <nav class="topnav-wrapper container flex-1">
        <ul class="topnav">
          <li><router-link to="#">개인뱅킹</router-link></li>
          <li><router-link to="#">인증센터</router-link></li>
          <li><router-link to="#">보안센터</router-link></li>
          <li><router-link to="#">고객센터</router-link></li>
        </ul>
        <BaseButton size="xs" label="로그인" />
      </nav>
      <nav class="nav-wrapper container">
        <a class="logo" href="/">
          <Logo />
        </a>
        <GlobalNav class="global-nav" />

        <div class="action-btns">
          <button class="user"><img :src="require(`@/assets/images/icon_24/user.png`)" alt="icon" /></button>
          <button @click="searchToggle" class="search"><img :src="require(`@/assets/images/icon_24/search.png`)" alt="icon" /></button>
          <button @click="drawerToggle" class="drawer"><img :src="require(`@/assets/images/icon_24/menu.png`)" alt="icon" /></button>
        </div>
      </nav>
      <Transition name="dropdown" appear>
        <DrawerNav v-if="drawer" />
        <SearchBar v-if="searchBar" />
      </Transition>
    </header>


  </div>

</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton.vue'
import GlobalNav from '@/components/Nav/GlobalNav.vue'
import Logo from '@/assets/images/logo_wrap.svg'
import DrawerNav from './DrawerNav.vue'
import SearchBar from './SearchBar.vue'
// import UserIcon from '@/assets/images/icon_24/user.svg'
// import SearchIcon from '@/assets/images/icon_24/search.svg'
// import CloseIcon from '../../../public/images/close.svg'
// import MenuIcon from '@/assets/images/icon_24/menu.svg'

export default {
  name: "TheHeader",
  components: { GlobalNav, BaseButton, Logo, DrawerNav, SearchBar },
  data() {
    return {
      drawer: false,
      searchBar: false,
      loading: false,
    };
  },

  methods: {
    drawerToggle: function () {
      this.drawer = !this.drawer
    },
    searchToggle: function () {
      this.searchBar = !this.searchBar
    },
    isLoading: function () {
      setTimeout(() => {
        this.loading = true
      }, 4000);
    },

    handleScroll() {
      const globalHeader = document.querySelector('.global-header');
      if (document.documentElement.scrollTop >= 148 || window.scrollTo >= 148) {
        globalHeader.classList.add('active')
      } else {
        globalHeader.classList.remove('active')
      }
      return this.globalHeader
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.isLoading = false;
    })
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
}
</script>


<style lang="scss" scoped>
.loading {
  display: block;
  position: absolute;
  height: 1px;
  width: 0;
  bottom: 0;
  background-color: var(--primary-1);
  transition: 0.3s;
  animation: loading alternate 1s;

  @keyframes loading {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
}

.global-header {
  --header-height: 148px;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  transition: all 0.3s ease;

  &.active {
    top: -48px;
  }
}

.logo {
  display: block;
  padding: 1rem 0;
  width: 152px;
}

.topnav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  .topnav+button {
    margin-left: 30px;
  }
}

.topnav {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      width: 1px;
      height: 12px;
      background-color: var(--gray-5);
      margin: 0 12px;
      font-weight: 400;
    }
  }

  li:last-child a {
    &::after {
      content: unset;
    }
  }
}

.action-btns {
  --svg-size: 24px;
  flex-shrink: 0;
  display: flex;

  >button {
    display: inline-block;
    width: var(--svg-size);
    height: var(--svg-size);
    padding: 0;
    cursor: pointer;
  }
  button+button {
    margin-left: 8px;
  }
}

.nav-wrapper {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}
</style>