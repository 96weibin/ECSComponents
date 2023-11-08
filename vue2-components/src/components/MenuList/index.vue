<template>
    <div class="menu-list-container">
        <div v-for="(menu, i) of menues" :key="i" class="menu-container" :class="{isSelected: menu.isSelected}" @click="linkto(menu.path)">
            <div class="icon">
                <Icon :name="menu.iconClass"></Icon>
            </div>
            <div class="label">{{ menu.label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Icon from '@/components/Common/Icon'
    export default {
        data() {
            return {
                menues: [
                    {iconClass: 'icon-star_filled', label: "hello", path: "components", isSelected: true},
                    {iconClass: 'icon-star_filled', label: "about", path: "about", isSelected: false},
                    {iconClass: 'icon-star_filled', label: "Home", path: "/", isSelected: false},
                    
                ]
            }
        },
        components: {
            Icon,
        },
        methods: {
            linkto(path) {
                console.log(`link to.........${path}`)
                console.log(this.$router)
                this.$router.push(path)
            }
        },
        // props: {
        //     menues: {
        //         type: Array,
        //     },
        // },
    }
</script>

<style lang="less" scoped>
@import '../../style/var.less';
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