import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from '@/views/Example/index.vue'
import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)

// login
const routes = [
  {
    path: '/',
    name: '메인',
    component: Home,
    alias: '/home'
  },
  {
    path: '*',
    name: 'NotFound', // 404
    component: NotFound,
    meta: {
      layout: 'EmptyLayout'
    }
  },
  {
    path: '/example',
    name: '예제페이지',
    component: Example,
    meta: {
      breadcrumb: '예제페이지'
    }
  },
  {
    path: '/one',
    name: '조회',
    meta: {
      breadcrumb: '조회'
    },
    children: [
      {
        path: '',
        name: '전체계좌조회',
        meta: {
          breadcrumb: '전체계좌조회'
        }
      },
      {
        path: 'a',
        name: '거래내역',
        meta: {
          breadcrumb: '거래내역'
        }
      },
      {
        path: '/one/b',
        name: '가상계좌',
        meta: {
          breadcrumb: '가상계좌'
        }
      },
      {
        path: '/one/c',
        name: '로그인 없이 조회',
        meta: {
          breadcrumb: '로그인 없이 조회'
        }
      }
    ]
  },
  {
    path: '/transfer',
    name: '이체',
    meta: {
      breadcrumb: '이체'
    },
    children: [
      {
        path: '',
        name: '통합이체',
        meta: {
          breadcrumb: '통합이체'
        }
      },
      {
        path: '',
        name: '대량이체',
        meta: {
          breadcrumb: '거래내역'
        },
        children: [
          {
            path: '',
            name: '대량이체업로드'
          },
          {
            path: '',
            name: '대량이체진행'
          },
          {
            path: '',
            name: '대량이체결과'
          }
        ]
      },
      {
        path: '',
        name: '자동이체',
        children: [
          {
            path: '',
            name: '자동이체등록'
          },
          {
            path: '',
            name: '자동이체관리'
          },
          {
            path: '',
            name: '자동이체결과'
          }
        ]
      },
      {
        path: '',
        name: '이체처리결과',
        meta: {
          breadcrumb: '이체처리결과'
        },
        children: [
          {
            path: '',
            name: '자동납부관리'
          }
        ]
      },
      {
        path: '',
        name: '예약/지연이체'
      }
    ]
  },
  {
    path: '/utilityBill',
    name: '공과금',
    meta: {
      breadcrumb: '공과금'
    }
  },
  {
    path: '/dep',
    name: '예적금',
    meta: {
      breadcrumb: '예적금'
    }
  },
  {
    path: '/loan',
    name: '대출',
    meta: {
      breadcrumb: '대출'
    }
  },
  {
    path: '/card',
    name: '카드',
    meta: {
      breadcrumb: '카드'
    }
  },
  {
    path: '/addService',
    name: '부가서비스',
    meta: {
      breadcrumb: '부가서비스'
    }
  },
  {
    path: '/banking',
    name: '뱅킹관리',
    meta: {
      breadcrumb: '뱅킹관리'
    }
  },
  {
    path: '/approvalBox',
    name: '결재함',
    meta: {
      breadcrumb: '결재함'
    }
  },
  {
    path: '/certification',
    name: '인증센터',
    meta: {
      breadcrumb: '인증센터'
    }
  },
  {
    path: '/customer',
    name: '고객센터',
    meta: {
      breadcrumb: '고객센터'
    }
  },
  {
    path: '/security',
    name: '보안센터',
    meta: {
      breadcrumb: '보안센터'
    }
  },
  // not auth
  {
    path: '/mypage',
    name: 'MY 페이지',
    meta: {
      breadcrumb: 'MY 페이지'
    }
  },
  {
    path: '/login',
    name: '로그인',
    meta: {
      breadcrumb: '로그인'
    }
  },
  {
    path: '/inquiries',
    name: '조회전용서비스',
    meta: {
      breadcrumb: '조회전용서비스'
    }
  }
]

// eslint-disable-next-lin
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
