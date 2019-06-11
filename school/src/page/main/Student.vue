<style lang="less" scoped>
.inputBox {
  display: flex;
  margin: 20px 20px 40px;
  height: 70px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  input {
    padding-left: 20px;
    flex: 1;
    border: none;
  }
  .iconsousuo {
    width: 100px;
    text-align: center;
    font-size: 38px;
    color: #929292;
  }
}
.userList {
  background-color: #fff;
  padding: 0 20px;
  margin-bottom: 60px;
  .item {
    height: 130px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    &:last-child {
      border-bottom: none;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 30px;
    }
    .name {
      font-size: 38px;
      color: #000;
    }
  }
}
</style>
<template>
  <div>
    <div class="inputBox">
      <input placeholder="请输入内容">
      <span class="iconfont iconsousuo"></span>
    </div>
    <div class="userList">
      <div class="item" v-for="i in 10" :key="i">
        <img :src="require('@/images/teacher.png')">
        <span class="name">周声涛</span>
      </div>
    </div>
  </div>
</template>

<script></script>
