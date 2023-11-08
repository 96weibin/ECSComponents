<template>
    <div class="avatar-container" :style="{width: size + 'px', height: size + 'px'}">
        <img class="avatar" :src="url" :alt="alt">
    </div>
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                default: ""
            },
            alt: {
                type: String,
                default: '头像'
            },
            size: {
                typeof: Number,
                default: 80,
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../../../style/var.less';

.avatar-container{
    .avatar{
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 50%;
        border: 2px solid @base-border-color;
    }
}
</style>