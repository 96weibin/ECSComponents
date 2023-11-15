<template>
    <div class="menu-list-container">
        <router-link v-for="(menu, i) of menues" :key="i" class="menu-container" :class="{isSelected: menu.path == currentTag}" :to=menu.path>
            <div class="icon">
                <Icon :name="menu.iconClass"></Icon>
            </div>
            <div class="label">{{ menu.label }}</div>
        </router-link>
    </div>
</template>

<script lang="ts">
    import Icon from '@/components/Common/Icon/index.vue'
    export interface IMenuProp {
        iconClass: string,
        label: string,
        path: string
    }
    export default {
        data() {
            return {
                
            }
        },
        components: {
            Icon,
        },
        methods: {
      
        },
        props: {
            menues: {
                type: Array,
                default: []
            },
            currentTag: {
                type: String
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../../../style/var.less';
.menu-list-container{
    .menu-container{
        box-sizing: border-box;
        background-color: @base;
        color: @white;
        width: 100%;
        padding: 20px 80px;
        margin: 5px 0;
        min-width: 200px;
        display: flex;
        font-size: 18px;
        font-weight: lighter;
        justify-content: start;
        transition: .2s  ease-in-out;
        &:hover{
            background-color: @liter-base;
        }
        .icon{
            
        }
        .label{
            margin-left: 10px;
        }
    }
        
    .isSelected{
        background-color: @liter-base;
    }
}
</style>