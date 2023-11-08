<template>
    <div style="display: flex; justify-content: center;">
        <Icon :name="'icon-page_turning_right'" :size="40"></Icon>
        <Icon :name="'icon-page_turning_left'" :size="60"></Icon>
        <Icon :name="'icon-show_less'" :size="80"></Icon>
        <Icon :name="'icon-show_more'" :size="100"></Icon>
        <Icon :name="'icon-star_filled'" :size="100"></Icon>
        
    </div>
</template>

<script>
    import Icon from './';
    export default {
        components: {
            Icon,
        },
    }
</script>

<style lang="less" scoped>

</style>