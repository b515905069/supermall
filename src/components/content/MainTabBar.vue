<template>

  <tab-bar>
      <tab-bar-item path="/home" activeColor='rgb(18,150,219)'>
        <template v-slot:item-icon> 
         <img src="~assets/img/tabbar/home1.svg" alt="">
        </template>
        <template v-slot:item-icon-active> 
         <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-text> 
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor='rgb(18,150,219)'>
        <template v-slot:item-icon> 
         <img src="~assets/img/tabbar/category1.svg" alt="">
        </template>
        <template v-slot:item-icon-active> 
         <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-text> 
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/shopcart" activeColor='rgb(18,150,219)'>
        <template v-slot:item-icon> 
         <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active> 
         <img src="~assets/img/tabbar/shopcart1.svg" alt="">
        </template>
        <template v-slot:item-text> 
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor='rgb(18,150,219)'>
        <template v-slot:item-icon> 
         <img src="~assets/img/tabbar/profile1.svg" alt="">
        </template>
        <template v-slot:item-icon-active> 
         <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-text> 
          <div>我的</div>
        </template>
      </tab-bar-item>
      
    </tab-bar>

  
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    components:{
      TabBar, TabBarItem
    }
  }
</script>

<style>

</style>