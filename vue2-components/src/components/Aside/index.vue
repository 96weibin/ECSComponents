<template>
    <div class="aside-container">
        <div class="aside-avatar">
            <Avatar class="avatar" url="https://th.bing.com/th/id/OIP.JuSM25g1b2eEYu-2KbGpVwHaHI?pid=ImgDet&rs=1"></Avatar>
        </div>
        <div class="aside-name">
            全世界最好
            <MenuList></MenuList>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/Common/Avatar'
import MenuList from '@/components/MenuList'
    export default {
        components: {
            Avatar,
            MenuList
        },
    }
</script>

<style lang="less" scoped>
@import '../../style/var.less';
    .aside-container{
        width: 300px;
        height: 100%;
        background-color: @base;
        color: @light;
        .aside-avatar{
            box-sizing: border-box;
            padding: 40px;
            .avatar{
                margin: 0 auto;
            }
            
        }
        .aside-name{
            font-size: 30px;
            font-weight: bold;
        }
    }
    
</style>