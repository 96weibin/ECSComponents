<template>
    <layout>
        <template v-slot:layout-left>
            <div style="width: 200px;">xxxxxxxxxxx</div>
        </template>
        <pre>xxx
            xxxx
            xxxxxxx
            xxxxxxxxx
            xxxxxxxxxx
        </pre>
        <template v-slot:layout-right>defaultcontent</template>
    </layout>
</template>

<script>
    import Layout from './';
    export default {
        components: {
            Layout,
        },
    }
</script>

<style lang="less" scoped>

</style>