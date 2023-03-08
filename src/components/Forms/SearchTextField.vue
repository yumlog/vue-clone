<template>
    <div>
        <input type="text" id="searchfield" :placeholder="placeholder" @touchstart="expand()">
        <div class="item-list">
            <ul>
                <li>ddd</li>
                <li>fff</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'placeholder',
        }
    },
    methods: {
        expand() {
            const searchField = document.querySelector('.item-list')
            searchField.style.display = 'block'
        }
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

.item-list {
    display: none;
}
</style>