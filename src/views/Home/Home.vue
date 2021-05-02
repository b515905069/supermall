<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:content>
        <div>购物街</div> 
      </template>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            @scrollPosition='scrollPosition' 
            :probe-type="3"
            @pullUp='loadMore'
            :pull-up-load='true'>
        <home-swiper :banners='banners'></home-swiper>
        <home-recommends :recommends='recommends'></home-recommends>
        <feature-view></feature-view>
        <tab-control :tabControlItems="tabControlItems" class="tab-control" @tabClick='tabClick'></tab-control>
        <goods-list :goods="goodsShow"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>



  </div>
  
</template>

<script>
  import Scroll from 'components/common/scroll/scroll.vue'
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/backTop.vue'
  

  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommends from './childrenComponents/HomeRecommends'
  import FeatureView from './childrenComponents/FeatureView'

  import {getHomeMultidata, getHomeGoods} from 'network/home.js'
  import {debounce} from 'common/utils.js'

  

  export default {
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      HomeSwiper,
      HomeRecommends,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        tabControlItems: ["流行", "新款", "精选"],
        //当前tabcontrol 为active的index
        currentActiveIndex: 'pop',

        goods: {
          'pop': {page:0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        isShow: false,  //返回顶部按钮是否显示
        offsetTop: 0
      }
    },
    computed: {
      goodsShow() {
        return this.goods[this.currentActiveIndex].list;
      }
    },
    created() {
      //请求数据
      this.getHomeMultidata();
      // this.getHomeGoods();
      //请求导航栏各项数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    //  npm install --save vue-editor-bridge
    },
    mounted() {      
      const refresh = debounce(this.$refs.scroll.refresh, 500);

       this.$bus.$on('itemImageLoad', () => {         //该函数不要再created里面执行，选择在mounted里
        //  this.$refs.scroll && this.$refs.scroll.refresh();         //不知名bug 加了 && 目前没有报错            //不过这函数执行频率可能很高
        refresh();
      })
    },
    methods: {
      

      //navbar监听方法
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentActiveIndex = 'pop';
            break;
          case 1:
            this.currentActiveIndex = 'new';
            break;
          case 2:
            this.currentActiveIndex = 'sell';
        }
      },
      //回到顶部
      backClick() {
        this.$refs.scroll.backTop(0, 0, 500);
      },

      /**
       *  请求数据方法
       */ 
      getHomeMultidata(){
        //1 请求多个数据
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1; 
         //console.log(page);
            // 请求good的数据
        getHomeGoods(type, page).then(res => {
           this.goods[type].list.push(...res.data.list);
           this.goods[type].page += 1;

           this.$refs.scroll.finishPullUp();     //不使上拉加载更多只响应一次
        })
      },
      //backTop 监听当前滚动位置 
      scrollPosition(position) {
        this.isShow = (-position.y) > 1000  //判断什么时候显示返回顶部
        // console.log(this.isShow);
      },
      loadMore() {
        this.getHomeGoods(this.currentActiveIndex);

      }
     
    }
 
    
  }

</script>

<style scoped>



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
    z-index: 8;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>