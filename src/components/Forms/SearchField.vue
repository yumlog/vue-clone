<template>
	<div>
		<!-- 검색어 입력 input -->
		<div class="searchfield-wrap">
			<input
				id="searchfield"
				type="text"
				:placeholder="placeholder"
				@touchstart="recentKeyword = true, dimmed = true"
				@keyup="relatedKeyword = true, recentKeyword = false"
			>
			<img class="img-search" inline src="@/assets/images/icon_24/appbar_search.svg" aria-hidden="true">
		</div>

		<!-- 최근 검색어 리스트 -->
		<div v-if="showRecentKeyword" class="recent-list">
			<p class="tit">
				최근검색어
			</p>
			<ul>
				<li v-for="item in recentKeywordData" :key="item">
					<button class="recent-keyword">
						{{ item.name }}
					</button>
					<button class="btn-close">
						<span class="sr-only">닫기</span>
					</button>
				</li>
			</ul>
		</div>

		<!-- 연관 검색어 리스트 -->
		<div v-if="relatedKeyword" class="related-list">
			<ul>
				<li v-for="item in relatedKeywordData" :key="item">
					<button class="related-keyword">
						{{ item.name }}
					</button>
				</li>
			</ul>
		</div>
        
		<!-- dimm -->
		<div
			v-if="dimmed"
			class="dimm"
			aria-hidden="true"
			@touchstart="recentKeyword = false, relatedKeyword = false, dimmed = false"
		/>        
	</div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'placeholder',
        },
        recentKeywordData: [],
        relatedKeywordData: [],
    },
    data() {
        return {
            recentKeyword: false,
            relatedKeyword: false,
            dimmed: false,
        }
    },
    computed: {
        showRecentKeyword() {
            return this.recentKeyword == true && this.relatedKeyword == false
        }
    },
}
</script>

<style lang="scss" scoped>
.searchfield-wrap {
    position: relative;
}

#searchfield {
    display: flex;
    align-items: center;
    padding: 0 56px 0 16px;
    width: 100%;
    height: 46px;
    margin-top: 16px;
    border: 1px solid var(--gray-5);
    border-radius: 8px;
}

.img-search {
    position: absolute;
    top: 10px;
    right: 16px;
    width: 24px;
    height: 24px;
}

.recent-list {
    position: sticky;
    margin-left: -22px;
    width: calc(100% + 44px);
    height: auto;
    padding: 30px 22px 38px;
    background-color: var(--white);
    z-index: 20;

    &.top {
        top: 90px;
    }

    .tit {
        font-weight: 700;
    }
    > ul {
        margin-top: 20px;
        > li {
            display: flex;
            align-items: center;
            position: relative;
            margin-left: 30px;
            &::before {
                content: '';
                position: absolute;
                left: -30px;
                width: 16px;
                height: 16px;
                background: url('@/assets/images/icon_16/time.png') center no-repeat;
                background-size: 100%;
            }
            .recent-keyword {
                width: calc(100% - 28px);
                padding: 8px 0;
                margin-right: 14px;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .btn-close {
                width: 14px;
                height: 14px;
                background: url('@/assets/images/icon_14/close.png') center no-repeat;
                background-size: 100%;
            }
        }
    }
}

.related-list {
    position: sticky;
    margin-left: -22px;
    width: calc(100% + 44px);
    height: auto;
    padding: 10px 22px 38px;
    background-color: var(--white);
    z-index: 20;
    > ul {
        > li {
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 28px;
            .related-keyword {
                padding: 8px 0;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
            }
            &::before {
                content: '';
                position: absolute;
                left: -28px;
                width: 12px;
                height: 12px;
                background: url('@/assets/images/icon_24/link.png') center no-repeat;
                background-size: 100%;
            }
        }
    }
}

.dimm {
    position: absolute;
    top: 124px;
    left: 0;
    width: 100%;
    height: calc(100vh - 124px);
    background-color: rgba(22,22,22,.4);
    z-index: 10;
}
</style>