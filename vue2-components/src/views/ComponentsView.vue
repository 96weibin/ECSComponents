<template>
    <div class="components-container">
        <div class="components-header">
            <h1 style="align-items: ;">Components</h1>
        </div>
        <div class="components-list">
            <div class="component-item">
                <div class="component-title">
                    <h2>Pagination</h2>
                </div>
                <div>
                    <Pagination :totalCount="totalCount"
                    :currentCount="currentCount"
                    :pageSize="pageSize"
                    @currentPageChanged="onCurrentPageChanged($event)"
                    ></Pagination>
                </div>
            </div>
            <div class="component-item">
                <div class="component-title">
                    <h2>ICON</h2>
                </div>
                <div>
                   <Icon></Icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pagination from '@/components/Pagination'
    import Icon from '@/components/Icon'
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
            Icon
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

.component-item{
    border-bottom: 1px dotted gray;
}
</style>