<template>
  <div class="home-container">
    Home
    <div v-for="a in data">
      <h3>{{ a.label }}</h3>
      <h3>{{ a.value }}</h3>
      <Icon name="icon-star"></Icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '../components/Common/Icon/index.vue'
// import style from 
export default Vue.extend({
  name: 'HomeView',
  components: {
    Icon
  },
  data() {
    return {
      data: []
    }
  },
  mounted () {
    this.$axios.get('/api/hello').then(data =>{
      this.data = data;
      console.log(data)
    }) 

    this.$utils.showMsg("base base base ", 'star', 2000, this.$el);
  },
});
</script>


<style lang="less" scoped>
.home-container{
  width: 100%;
  height: 100%;
}
</style>