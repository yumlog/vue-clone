<template>
    <div>
        <!-- 검색어 입력 input -->
        <input type="text" id="searchfield"
        :placeholder="placeholder"
        @touchstart="recentKeyword = true, dimmed = true"
        @keyup="relatedKeyword = true, recentKeyword = false">

        <!-- 최근 검색어 리스트 -->
        <div v-if="recentKeyword" class="recent-keyword">
            <p>최근검색어</p>
            <ul>
                <li>ddd</li>
                <li>fff</li>
            </ul>
        </div>

        <!-- 연관 검색어 리스트 -->
        <div v-if="relatedKeyword" class="related-keyword">
            <ul>
                <li>11111</li>
                <li>22222</li>
            </ul>
        </div>
        
        <!-- dimm -->
        <div v-if="dimmed"
        @touchstart="recentKeyword = false, relatedKeyword = false, dimmed = false"
        class="dimm" aria-hidden="true" ></div>        
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'placeholder',
        },
    },
    data() {
        return {
            recentKeyword: false,
            relatedKeyword: false,
            dimmed: false,
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
#searchfield {
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    height: 46px;
    margin-top: 16px;
    border: 1px solid var(--gray-5);
    border-radius: 8px;
}

.recent-keyword {
    position: absolute;
    top: 124px;
    left: 0;
    width: 100%;
    height: auto;
    padding: 30px 22px 38px;
    background-color: var(--white);
    z-index: 20;
}

.related-keyword {
    position: absolute;
    top: 124px;
    left: 0;
    width: 100%;
    height: auto;
    padding: 30px 22px 38px;
    background-color: var(--white);
    z-index: 20;
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