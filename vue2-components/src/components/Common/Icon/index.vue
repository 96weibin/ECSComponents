<template>
    <div class="icon-container">
        <div class="iconfont" :class="[name]" :style="{fontSize: size + 'px'}" @click="handelClick"></div>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 20
            },
            name: {
                type: String,
                require: true  
            }
        },
        created () {
            console.log(this.name);
        },
        methods: {
            handelClick() {
                this.$emit('click')
            }
        },
    }
</script>

<style lang="less" scoped>
.icon-container{
    display: inline-block;
}
</style>