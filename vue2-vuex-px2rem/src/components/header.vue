<style lang="less" scoped>
.header {
  position: relative;
  line-height: 80px;

  text-align: center;
  background: #fff;
  font-size: 28px;
  .item {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    a {
      color: #fff;
    }
  }
  .title {
    width: 500px;
    margin: 0 auto;
    font-size: 30px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
}
</style>
<template>
  <header class="header">
    <div class="item left">
      <slot name="left"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="item right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>