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
                <div class="compnents">
                    <PaginationTest></PaginationTest>
                </div>
            </div>
            <div class="component-item">
                <div class="component-title">
                    <h2>ICON</h2>
                </div>
                <div class="compnents">
                  <IconTest></IconTest>
                </div>
            </div>
            <div class="component-item">
                <div class="component-title">
                    <h2>Avatar</h2>
                </div>
                <div class="compnents">
                    <AvatarTest></AvatarTest>
                </div>
            </div>
            <div class="component-item">
                <div class="component-title">
                    <h2>Empty</h2>
                </div>
                <div class="compnents">
                    <EmptyTest></EmptyTest>
                </div>
            </div>
            <div class="component-item">
                <div class="component-title">
                    <h2>Layout</h2>
                </div>
                <div class="compnents">
                    <LayoutTest></LayoutTest>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import PaginationTest from '@/components/Common/Pagination/test.vue'
    import IconTest from '@/components/Common/Icon/test.vue'
    import AvatarTest from '@/components/Common/Avatar/test.vue'
    import EmptyTest from '@/components/Common/Empty/test.vue'
    import LayoutTest from '@/components/Common/Layout/test.vue'
    export default {
        data() {
            return {
            

            }
        },
        components: {
            PaginationTest,
            IconTest,
            AvatarTest,
            EmptyTest,
            LayoutTest
        },
        methods: {
           
        }
    }
</script>

<style lang="less" scoped>

.components-container{
    .components-list{
        
        .component-item{
            border-bottom: 1px dotted gray;
            .component-title{}
            .compnents{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

}

</style>