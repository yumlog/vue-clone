<template>
  <section class="drawer-nav">
    <div class="container">
      <h1>전체메뉴</h1>

      <article class="navlist"  v-for="item in 5" :key="item">
        <h4 class="navlist--title">조회</h4>
        
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'DrawerNav',

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
.drawer-nav {
  width: 100%;
  position: absolute;
  top:0;
}

.navlist {
  display: flex;
  // justify-content: space-between;
  padding: 34px 0;
  width: 100%;
  flex: 0 1 auto;

  &--title {
    width: 100%;
    max-width: 180px;
    font-weight: 700;
  }
  &--items {
    width: calc(100% / 5);
    .lv-title {
      margin-bottom: 10px;
      font-weight: 700;
    }
  }
}

.navlist + .navlist {
  border-top: 1px solid var(--gray-5);
}
</style>