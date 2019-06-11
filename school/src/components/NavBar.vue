<template>
  <div class="wrapper">
    <div class="nav">
      <div class="navLeft">
        <span v-if="!main" class="iconfont iconback" @click="prev"></span>
      </div>
      <div class="navMid">{{ title }}</div>
      <div class="navRight">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "main"],
  components: {},
  data() {
    return {
      // title:'保费计算',
    };
  },
  computed: {},
  created: function() {},
  mounted: function() {
    console.log(this);
    console.log(2);
  },
  methods: {
    prev() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.wrapper {
  height: 80px;
}
.nav {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 80;
 padding: 0 20px;
  .navMid {
    flex: 1;

    // width: 335px;
    height: 90px;
    line-height: 90px;
    color: #333;
    font-size: 32px;
    text-align: center;
    letter-spacing: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   
  }
  .navLeft{
     justify-content: flex-start;
  }
  .navRight{
     justify-content: flex-end;
  }
  .navRight,.navLeft {
    min-width: 120px;
    height: 90px;
    display: flex;
   
    align-items: center;
    .iconfont {
      font-size: 40px;
      color: #000000;
    }
  }
}
</style>
