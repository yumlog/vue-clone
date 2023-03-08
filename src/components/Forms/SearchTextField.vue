<template>
    <div>
        <input type="text" id="searchfield" :placeholder="placeholder" @touchstart="expand()">
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'placeholder',
        }
    }
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
</style>