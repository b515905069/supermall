<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:content>
        <div>购物车</div>
        
      </template>
    </nav-bar>
    
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMultidata} from 'network/home.js'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1 请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>