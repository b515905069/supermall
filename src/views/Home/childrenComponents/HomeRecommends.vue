<template>
  <div class="recommends">
    <div v-for="(item) in recommends" :key="item.title" class="recommends_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          []
        }
      }
    }
  }
</script>

<style>
  .recommends {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommends_item {
    flex: 1;

  }
  .recommends_item img {
    width: 90%;
    /* height: 70px; */
    margin-bottom: 10px;
  }
</style>