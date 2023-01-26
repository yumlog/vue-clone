<template>
  <div>

    <header class="global-header">
      <!-- top nav -->
      <nav class="topnav-wrapper container">
        <ul class="topnav">
          <li><router-link to="#">개인뱅킹</router-link></li>
          <li><router-link to="#">인증센터</router-link></li>
          <li><router-link to="#">보안센터</router-link></li>
          <li><router-link to="#">고객센터</router-link></li>
        </ul>
        <BaseButton size="xs" label="로그인" />
      </nav>

      <nav class="nav-wrapper container">
        <a href="/">
          <Logo />
        </a>
        <GlobalNav />

        <div class="action-btns">
          <button>
            <UserIcon />
          </button>
          <button @click="searchToggle" :class="{ active: 'active' }">
            <CloseIcon v-if="searchBar" />
            <SearchIcon v-else />
          </button>
          <button @click="drawerToggle" :class="{ active: 'active' }">
            <CloseIcon v-if="drawer" />
            <MenuIcon v-else />
          </button>
        </div>
      </nav>


    </header>
    <transition name="fade">
      <DrawerNav v-if="drawer" />
      <SearchBar v-if="searchBar" />
    </transition>
  </div>

</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton.vue'
import GlobalNav from '@/components/Nav/GlobalNav.vue'
import Logo from '@/assets/images/logo_wrap.svg'
import UserIcon from '@/assets/images/user.svg'
import SearchIcon from '@/assets/images/search.svg'
import CloseIcon from '@/assets/images/vue.svg'
import MenuIcon from '@/assets/images/menu.svg'
import DrawerNav from './DrawerNav.vue'
import SearchBar from './SearchBar.vue'

export default {
  name: "TheHeader",
  components: { GlobalNav, BaseButton, Logo, SearchIcon, UserIcon, CloseIcon, MenuIcon, DrawerNav, SearchBar },
  data() {
    return {
      drawer: false,
      searchBar: false,
    };
  },

  methods: {
    drawerToggle: function () {
      this.drawer = !this.drawer
    },
    searchToggle: function () {
      this.searchBar = !this.searchBar
    },
  },
}
</script>


<style lang="scss" scoped>
.global-header {
  position: relative;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  svg {
    width: var(--svg-size);
    height: var(--svg-size);
  }

  button {
    cursor: pointer;
  }
}

.nav-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

// Fade Opacity
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>