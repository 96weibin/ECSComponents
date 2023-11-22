<template>
    <div class="aside-container">
        <div class="aside-avatar">
            <Avatar class="avatar" url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F11%2F20171011114246_uErJN.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701964158&t=09bc517749e1130740d14a33aa194c0e"></Avatar>
        </div>
        <div class="aside-name">
            全世界最好
            <MenuList :menues=menues :currentTag=currentTag></MenuList>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/Common/Avatar'
import MenuList from '@/components/Common/MenuList'
    export default {
        components: {
            Avatar,
            MenuList
        },
        data() {
            return {
                menues: [
                    {iconClass: 'icon-message', label: "hello", path: "components"},
                    {iconClass: 'icon-star_filled', label: "about", path: "about"},
                    {iconClass: 'icon-kong', label: "Home", path: "/"},
                ],
                currentTag: '/'
            }
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
            text-align: center;
        }
    }
    
</style>