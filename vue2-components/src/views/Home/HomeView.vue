<template>
  <div class="home-container">
    <Carouse :banners-data="banners"></Carouse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '../../components/Common/Icon/index.vue'
import Carouse from './Carouse.vue';
// import style from 
export default Vue.extend({
  name: 'HomeView',
  components: {
    Icon,
    Carouse
  },
  data() {
    return {
      banners: []
    }
  },
  mounted () {
    this.$axios.get('/api/getBanners').then(data =>{
      this.banners = data;
    }) 

    // this.$utils.showMsg(`恭喜 发送成功`, "success", 200000, this.$el);
  },
});
</script>


<style lang="less" scoped>
.home-container{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>