<template>
  <div id="tab_control">
    <div v-for="(item, index) in tabControlItems" :key="index" class="tab_control_item" :class="{isActive: currentSize === index}" @click="itemClick(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tabControlItems: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentSize: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentSize = index;
        //navbar 按钮点击监听 传给home要显示的是哪栏数据
        this.$emit("tabClick", index);
      }
    }
  }
</script>

<style scoped>
  #tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab_control_item {
    flex: 1;
  }
  .tab_control_item span {
    padding: 5px;
  }
  .isActive {
    color: var(--color-tint);
  }
  .isActive span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>