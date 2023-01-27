<template>
  <section class="drawer-nav">
    <div class="container">
      <h1 class="drawer-nav--title">전체메뉴</h1>

      <article class="navlist" v-for="item in navRoutes.slice(2, 11)" :key="item.index">
        <h4 class="navlist--title flex-shrink-0">{{ item.name }}</h4>
        <nav v-for="level2 in item.children" :key="level2.index" class="navlist--items">
          <h6 class="lv-title" v-if="item.index === level2.index">{{ level2.name }}</h6>

          <ul class="navs">
            <li v-for="level3 in level2.children" :key="level3.index">
              <router-link :to="level3.path">{{ level3.name }}</router-link>
            </li>
          </ul>
        </nav>
      </article>

      <!-- 
      <article class="navlist"  v-for="item in 5" :key="item">
        <h4 class="navlist--title flex-shrink-0">조회</h4>   
        <nav v-for="nav in 5" :key="nav" class="navlist--items">
          <h6 class="lv-title">통합이체</h6>
          <ul class="navs">
            <li>1111</li>
            <li>222</li>
            <li>33333</li>
            <li>444444444</li>
            <li>5555555555555</li>
          </ul>
        </nav>
      </article>
       -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'DrawerNav',

  data() {
    return {
      
    }
  },
  computed: {
    navRoutes() {
      return this.$router.options.routes;
    },
  },
}
</script>

<style lang="scss" scoped>
.drawer-nav {
  width: 100%;
  position: absolute;
  top: var(--header-height);
  background-color: var(--white);

  &--title {
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
  }
}

.navlist {
  display: flex;
  padding: 34px 0;

  &--title {
    flex-shrink: 0;
    min-width: 180px;
    font-weight: 700;
  }

  &--items {
    width: 220px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    .lv-title {
      margin-bottom: 10px;
      font-weight: 700;
    }
  }
}

.navlist+.navlist {
  border-top: 1px solid var(--gray-5);
}

.navs {
  li + li {
    
  }
}
</style>