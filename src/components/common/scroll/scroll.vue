<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    //1 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType ,
      pullUpLoad: this.pullUpLoad
    })
    //2 监听滚动的位置
    if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => { 
        // console.log(position);
        this.$emit('scrollPosition', position);
      })
    }
    
    //3 监听上拉事件
    if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
        // console.log("上拉加载更多");
        this.$emit('pullUp');
      })
    }
  },
  methods: {
    backTop (x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);      //首先判断scroll有没有值。有的话在执行后续操作,否则不执行后续操作
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("======");
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>