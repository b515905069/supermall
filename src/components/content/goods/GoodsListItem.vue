<template>
  <div class="goods-list-item">

    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad');                  //事件总线，把监听图片的信息发送给Home
      }
    }
  }
</script>

<style>
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsinfo {
    font-size: 12px;
    position:absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
    /* 规定段落中的文本不会换行 */
    margin-bottom: 3px;
  }
  .goodsinfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goodsinfo .collect {
    position: relative;
  }
  .goodsinfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>