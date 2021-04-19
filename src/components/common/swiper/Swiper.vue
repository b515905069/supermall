<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    
    <slot name="indicator"></slot>
    
    <div class="indicator">
      
      <slot name="indicator">
        <div></div>
      </slot>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRadio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0, //元素个数
        totalWidth: 0, //swiper的宽度
        swiperStyle: {}, //swiper的样式
        currentIndex: 1, //当前的index
        scrolling: false, //是否正在滚动
      }
    },
    mounted() { //vue生命周期函数
      //1 操作DOM，在前后添加Slide
      setTimeout(() => {
        // this.handleDom();
      })
    },
    methods: {
      /**
       * 定时器操作
       */ 
      startTimer(){
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },
      stopTimer() {
        window.clearInterval(this.playTimer);
      },
      /**
       * 滚动到正确的位置
       */ 
      scrollContent(currentPosition) {
        // 0 设置正在滚动
        this.scrolling = true;
        //1 开始滚动动画
        this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
        this.setTransfrom(currentPosition);

        //2 判断滚动到的位置
        this.checkPosition();

        //3 滚动完成
        this.scrolling = false;
      },
      /**
       * 校验正确的位置 
       */
      checkPosition() {
        window.setTimeout(() => {
          //1 校验正确的位置
          this.swiperStyle.transition = '0ms';
          if(this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransfrom(-this.currentIndex * this.totalWidth);    
          } else if(this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransfrom(-this.currentIndex * this.totalWidth);
          }
          //2 结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex - 1);
        }, this.animDuration);
      },


      /**
       * 设置滚动的位置
       */ 
      setTransfrom(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
        // -webkit 是表示针对 safari 浏览器支持，-ms表示针对 IE 浏览器支持

      }
    },
    handleDom() {
      //1 获取要操纵的元素
      let swiperEl = document.querySelector('.swiper') //querySelector() 方法仅仅返回匹配指定选择器的第一个元素。
      let slidesEls = swiperEl.getElementsByClassName('slide');

      //2 保存个数
      this.slideCount = sliderEls.length;
      //3 如果大于1个，那么在前后分别添加一个slide
      if(this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      //4 让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransfrom(-this.totalWidth);
    }
    
  }

</script>

<style>

</style>