<template>
    <div class="center">
        <Avatar v-for="(item, i) of arr" :url="item.url" :size="item.size"></Avatar>
    </div>
</template>

<script>
    import Avatar from './'
    export default {
        data() {
            return {
                url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F11%2F20171011114246_uErJN.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701964158&t=09bc517749e1130740d14a33aa194c0e",
            }
        },
        components: {
            Avatar,
        },

        computed: {
            arr() {
                return [
                    {url: this.url, size: 40},
                    {url: this.url, size: 60},
                    {url: this.url, size: 80},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>