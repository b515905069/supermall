<template>
  <div class="goods-list">

    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item='goods[index]'></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
  export default {
    props: {
      goods: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    data() {
      return {
        
      }
    },
    components: {
      GoodsListItem
    }
  }
  
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2px;
  }
</style>