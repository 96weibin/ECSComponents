<template>
    <div class="layout-container">
        <div class="layout-left">
            <slot name="layout-left"></slot>
        </div>
        <div class="layout-mid">
            <slot></slot>
        </div>
        <div class="layout-right">
            <slot name="layout-right"></slot>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .layout-container{
        display: flex;
        width: 100%;
        height: 100%;
        .layout-left{
            flex: 0 0 1;
        }
        .layout-mid{
            flex-basis: auto;
            flex: 1;
        }
        .layout-right{
            flex: 0 0 1;
        }
    }
</style>