<template>
    <div>
        <Icon name="icon-{{ type }}"></Icon>
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import Icon from '../../Common/Icon/index.vue'

    // 响应式状态
    const count = ref(0)

    // 用来修改状态、触发更新的函数
    function increment() {
    count.value++
    }

    // 生命周期钩子
    onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
    })

    //computed 返回集合
    const forms = computed(()=>{})

    defineProps({       //defineProps 编译时宏 无需引入，
        msg: String,    //声明了 msg 变量
        type: String
    })
    </script>

<style lang="less" scoped>

</style>