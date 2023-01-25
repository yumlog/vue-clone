<template>
  <div class="flex flex-col align-center">

    <div class="tab-wrap">
      <ul class="tabs">
        <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentID" />
      </ul>
      <div class="tab-content">
        <transition>
          <section class="item" :key="currentID">
            <router-view>

              {{ current.content }}
            </router-view>
          </section>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import TabItem from '@/components/Tabs/Tab.vue'

export default {
  components: { TabItem },
  data() {
    return {
      currentID: 1,
      list: [
        { id: 1, label: '컴포', content: '', path: '/fileList/a' },
        { id: 2, label: '조회', content: '', path: '/fileList/qm' },
        { id: 3, label: '이체', content: '', path: '/fileList/tr' },
        { id: 4, label: '공과', content: '', path: '/fileList/ub' },
        { id: 5, label: '예적', content: '', path: '/fileList/gs' },
        { id: 6, label: '대출', content: '', path: '/fileList/am' },
        { id: 7, label: '카드', content: '', path: '/fileList/cd' },
        { id: 8, label: '부가', content: '', path: '/fileList/as' },
        { id: 9, label: '뱅킹관', content: '', path: '/fileList/bm' },
        { id: 10, label: '결재함', content: '', path: '/fileList/ax' },
        { id: 11, label: '인증센', content: '', path: '/fileList/cc' },
        { id: 12, label: '고객센', content: '', path: '/fileList/mc' },
        { id: 13, label: '보안센', content: '', path: '/fileList/sc' },
        { id: 14, label: '메인', content: '', path: '/fileList/ma' },
        { id: 15, label: '유틸', content: '', path: '/fileList/mp' },
        { id: 16, label: '공통', content: '', path: '/fileList/cm' },
      ]
    };
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentID) || {}
    }
  },

  methods: {

  },

};
</script>

<style lang="scss" scoped>

</style>
