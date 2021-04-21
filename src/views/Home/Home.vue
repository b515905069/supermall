<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:content>
        <div>购物街</div> 
      </template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommends :recommends='recommends'></home-recommends>
    <feature-view></feature-view>
    <tab-control :tabControlItems="tabControlItems" class="tab-control"></tab-control>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
            <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
    </ul>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/TabControl.vue'

  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommends from './childrenComponents/HomeRecommends'
  import FeatureView from './childrenComponents/FeatureView'

  import {getHomeMultidata} from 'network/home.js'
  

  export default {
    components: {
      NavBar,
      TabControl,

      HomeSwiper,
      HomeRecommends,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        tabControlItems: ["流行", "新款", "精选"]
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

    position:sticky;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>