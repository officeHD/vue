<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  .img {
    width: 260px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -130px;
    margin-top: -130px;
  }
}
</style>
<template>
  <div class="mask">
    <img class="img" :src="logo" alt>
  </div>
</template>
<script>
import logo from "./loading.gif";
export default {
  data() {
    return {
      logo: logo
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>