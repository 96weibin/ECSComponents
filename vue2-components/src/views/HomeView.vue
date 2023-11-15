<template>
  <div class="home-container">
    Home
    <div v-for="a in data">
      <h3>{{ a.label }}</h3>
      <h3>{{ a.value }}</h3>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
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
  },
});
</script>


<style lang="less" scoped>
.home-container{
  width: 100%;
  height: 100%;
}
</style>