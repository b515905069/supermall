<template>
    <swiper>
      <swiper-item v-for="(items) in banners" :key="items.title">
        <a :href="items.link">
          <img :src="items.image" alt="">
        </a>

      </swiper-item>
    </swiper>  
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
  export default {
    props: {
      banners: {
        type: Array,
        default() {
          [];
        }
      }
    },
    components: {
      Swiper, SwiperItem
    }
  }
</script>

<style>

</style>