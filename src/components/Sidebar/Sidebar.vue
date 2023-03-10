<template>
    <aside>
        <!-- login information -->
        <div class="user-info" :class="setScroll ? 'active' : ''" @scroll="handleScroll">
            <div class="info-wrap">
                <div class="ico-profile">
                    <img src="@/assets/images/icon_32/squircle_32x32_reflexion.png" alt="프로필">
                </div>
                <div class="info-area">
                    <div class="username">
                        김신협님
                    </div>
                    <div class="sub">
                        <div class="recent">
                            <p>최근접속 <span>2023.06.24 23:30:56</span></p>
                        </div>
                        <base-button label="로그아웃" size="xs" />
                    </div>
                </div>
            </div>

            <!-- serachfield-->
            <div class="search-wrap">
                <SearchField placeholder="메뉴를 찾기 어려우신가요?" :recent-keyword-data="recentKeywordData"
                    :related-keyword-data="relatedKeywordData" />
            </div>

            <!-- quick menu -->
            <div class="quick-wrap">
                <ul>
                    <li>
                        <router-link to="" title="보안센터">
                            <img src="@/assets/images/icon_32/certify.png" alt="보안센터">
                            <p>보안센터</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="" title="인증센터">
                            <img src="@/assets/images/icon_32/lock.png" alt="인증센터">
                            <p>인증센터</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="" title="고객센터">
                            <img src="@/assets/images/icon_32/cs.png" alt="고객센터">
                            <p>고객센터</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="" title="공지이벤트">
                            <img src="@/assets/images/icon_32/event.png" alt="공지이벤트">
                            <p>공지/이벤트</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!-- side navigation -->
        <div class="side-nav">
            <!-- menu list -->
            <ul class="menulist">
                <li v-for="(menu, index) in menulist" :key="index" :class="{ active: menuActive == true }">
                    {{ menu.name }}

                    <!-- sub menu -->
                    <ul class="submenu">
                        {{ menu.name }}
                        <li v-for="sub in menu.children" :key="sub.index" :class="sub.children ? 'dropdown expand' : ''">
                            <router-link :to="sub.path">
                                {{ sub.name }}
                            </router-link>

                            <!-- dep3 menu -->
                            <ul class="dep3menu">
                                <li v-for="dep3 in sub.children" :key="dep3.index">
                                    <router-link :to="dep3.path">
                                        {{ dep3.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="btns-wrap">
            <button class="btn-settings" @click="$emit('settings')">
                <img inline src="@/assets/images/icon_20/Gear.svg" aria-hidden="true">
                <span class="sr-only">설정</span>
            </button>
            <button class="btn-close" @click="$emit('close')">
                <img inline src="@/assets/images/icon_24/appbar_close.svg" aria-hidden="true">
                <span class="sr-only">닫기</span>
            </button>
        </div>
    </aside>
</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton.vue';
import SearchField from '@/components/Forms/SearchField.vue';
import $ from 'jquery';

let winScroll = window.scrollY

export default {
    components: { BaseButton, SearchField },
    data() {
        return {
            setScroll: true,
            menuActive: false,
            menulist: [
                {
                    name: '조회',
                    children: [
                        {
                            path: '',
                            name: 'children 1',
                        },
                        {
                            path: '',
                            name: 'children 2',
                        },
                        {
                            path: '',
                            name: 'children 3',
                            children: [
                                {
                                    path: '',
                                    name: 'depth 3',
                                },
                                {
                                    path: '',
                                    name: 'depth 3',
                                },
                                {
                                    path: '',
                                    name: 'depth 3',
                                },
                            ]
                        },
                    ]
                },
                {
                    name: '이체',
                    children: [
                        {
                            path: '',
                            name: 'children 4',
                        },
                        {
                            path: '',
                            name: 'children 5',
                        },
                        {
                            path: '',
                            name: 'children 6',
                        },
                    ]
                },
            ],
            recentKeywordData: [
                {
                    name: '전체계좌조회',
                },
                {
                    name: '가상계좌조회',
                },
                {
                    name: '납부',
                },
            ],
            relatedKeywordData: [
                {
                    name: '지로납부',
                },
                {
                    name: '건강보험료납부',
                },
                {
                    name: '통신비납부',
                },
            ],
        };
    },
    mounted() {
        // 메뉴 클릭시 active클래스 활성화, 형제요소 비활성화
        $('.menulist li').on('click', function () {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
        })
        // 메뉴 첫번째 요소 항상 활성화
        $('.menulist li').first().addClass('active')
        // dep3 메뉴 토글화
        $('.submenu li.dropdown > a').on('click', function () {
            $(this).parent().toggleClass('expand')
        })
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
};
</script>

<style lang="scss" scoped>
@import './Sidebar.scss'
</style>