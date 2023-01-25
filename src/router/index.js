import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound.vue'
import One from '@/views/One/index.vue'
import OneA from '@/views/One/OneA.vue'
import OneB from '@/views/One/OneB.vue'
import OneC from '@/views/One/OneC.vue'
import OneD from '@/views/One/OneD.vue'
import Two from '@/views/Two.vue'
import Example from '@/views/Example/index.vue'
import FileList from '@/views/FileList/index.vue'
import Compo from '@/views/FileList/Compo.vue'
import Qm from '@/views/FileList/Qm.vue'
import Tr from '@/views/FileList/Tr.vue'

import SidebarNav from '@/components/Nav/SidebarNav.vue'

// login
const routes = [
  {
    path: '/',
    name: '홈',
    component: Home,
    alias: '/home',
  },
  {
    path: '*',
    name: 'NotFound', // 404
    component: NotFound,
    meta: {
      layout: 'EmptyLayout'
    },
  },
  // views

  // 조회
  // 이체
  // 공가금
  // 예적금
  // 대출
  // 카드
  // 부가서비스
  // 뱅킹관리
  // 결재함

  {
    path: '/one/:id',
    name: '조회',
    components: {
      default: One,
      left: SidebarNav,
      right: SidebarNav,
    },
    children: [
      {
        path: '', // 상위 경로
        name: '전체계좌조회',
        component: OneA,
      },
      {
        path: 'b',
        name: '거래내역',
        component: OneB,
      },
      {
        path: 'c',
        name: '가상계좌',
        component: OneC,
      },
      {
        path: 'd',
        name: '로그인 없이 조회',
        component: OneD,
      },
    ],
  },
  {
    path: '/two',
    name: 'Two',
    component: Two,
  },
  {
    path: '/example',
    name: '예제페이지',
    component: Example,
  },
  {
    path: '/fileList',
    name: '파일리스트',
    component: FileList,
    children: [
      {
        path: 'a',
        name: 'Component',
        component: Compo,
      },
      {
        path: 'qm',
        name: '조회',
        component: Qm,
      },
      {
        path: 'tr',
        name: '이체',
        component: Tr,
      },
    ],
  },
];

// eslint-disable-next-lin
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})

export default router
