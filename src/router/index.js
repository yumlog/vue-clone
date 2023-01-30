import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound.vue'
import One from '@/views/One/index.vue'
import OneRoute from '@/views/One/OneRoute.vue'
import OneA from '@/views/One/OneA.vue'
import OneB from '@/views/One/OneB.vue'
import OneC from '@/views/One/OneC.vue'
import OneD from '@/views/One/OneD.vue'
import Queries from '@/views/One/Queries/index.vue'
import QueriesContents from '@/views/One/Queries/Contents.vue'

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
		component: Home,
		alias: '/main',
		// redirect: ''
	},
	{
		path: '*',
		name: 'NotFound', // 404
		component: NotFound,
		meta: {
			layout: 'EmptyLayout',
		},
	},
	{
		path: '/one',
		name: '조회',
		components: {
			default: One,
			sidebar: SidebarNav, // sidebar가 있는 화면구성
		},
		children: [
			{
				path: ':id',
				name: '전체계좌조회',
				component: OneRoute,
				children: [
					{
						path: '/next/a',
						name: '거래내역',
						component: OneA,
					},
					{
						path: '/next/b',
						name: '가상계좌',
						component: OneB,
					},
					{
						path: '/next/c',
						name: '로그인 없이 조회',
						component: OneC,
					},
					{
						path: '/next/d',
						name: '아무거나 조회',
						component: OneD,
					},
				],
			},
			{
				path: ':id',
				name: '쿼리즈인덱스',
				component: Queries,
				children: [
					{
						path: '/q/home',
						name: '쿼리즈홈',
						component: QueriesContents,
					},
				],
			},
		],
	},
	{
		path: '/transfer',
		name: '이체',
		children: [
			{
				path: '',
				name: '통합이체',
			},
			{
				path: '',
				name: '대량이체',
				children: [
					{
						path: '',
						name: '대량이체업로드',
					},
					{
						path: '',
						name: '대량이체진행',
					},
					{
						path: '',
						name: '대량이체결과',
					},
				],
			},
			{
				path: '',
				name: '자동이체',
				children: [
					{
						path: '',
						name: '자동이체등록',
					},
					{
						path: '',
						name: '자동이체관리',
					},
					{
						path: '',
						name: '자동이체결과',
					},
				],
			},
			{
				path: '',
				name: '이체처리결과',
				children: [
					{
						path: '',
						name: '자동납부관리',
					},
				],
			},
			{
				path: '',
				name: '예약/지연이체',
			},
		],
	},
	{
		path: '/utilityBill',
		name: '공과금',
	},
	{
		path: '/dep',
		name: '예적금',
	},
	{
		path: '/loan',
		name: '대출',
	},
	{
		path: '/card',
		name: '카드',
	},
	{
		path: '/addService',
		name: '부가서비스',
	},
	{
		path: '/banking',
		name: '뱅킹관리',
	},
	{
		path: '/approvalBox',
		name: '결재함',
	},
	{
		path: '/certification',
		name: '인증센터',
	},
	{
		path: '/customer',
		name: '고객센터',
	},
	{
		path: '/security',
		name: '보안센터',
	},
	// not auth
	{
		path: '/mypage',
		name: 'MY 페이지',
	},
	{
		path: '/login',
		name: '로그인',
	},
	{
		path: '/inquiries',
		name: '조회전용서비스',
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
]

// eslint-disable-next-lin
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes,
})

export default router
