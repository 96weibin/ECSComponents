<template>
  <div id="app">
    <Layout>
      <Aside slot="layout-left"></Aside>
      <router-view/>
    </Layout>
  </div>
</template>


<style lang="less" scoped>

#app {

  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Layout from '@/components/Common/Layout/index.vue'
import Aside from '@/components/Aside/index.vue'
import Icon from '@/components/Common/Icon/index.vue'

export default {
  mounted () {
  },
  components: {
    Aside,
    Layout,
    Icon 
  },
 
}
</script>