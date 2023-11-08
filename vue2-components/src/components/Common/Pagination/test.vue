<template>
    <div>
        <Pagination :totalCount="totalCount"
                    :currentCount="currentCount"
                    :pageSize="pageSize"
                    @currentPageChanged="onCurrentPageChanged($event)"
                    ></Pagination>
    </div>
</template>

<script>
    import Pagination from './'
    export default {
        data() {
            return {
                totalCount: 51,
                currentCount: 5,
                pageSize: 10,
            }
        },
        components: {
            Pagination,
        }, 
        methods: {
            onCurrentPageChanged(e) {
                console.log(e)
                this.currentCount = e
            }
        }
    }
</script>

<style lang="less" scoped>

</style>