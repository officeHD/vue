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

.btnPrimary {
  height: 70px;
  position: relative;
  display: block;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  line-height: 70px;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  border-width: 0;
  outline: 0;
  -webkit-appearance: none;
  margin: 20px 0;
  color: #ffffff;
  background-color: #0090ed;
  font-size: 28px;
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
    justify-content: space-between;
    &:last-child {
      border-bottom: none;
    }
    .left {
      display: flex;
      align-items: center;
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
.tabTop {
  display: flex;
  padding: 30px 0;
  background-color: #fff;
  justify-content: center;
  .itemTop {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 28px;
    margin: 0 10px;
    border-right: 1px solid #e6e6e6;
    padding: 0 20px;
    color: #999;
    &:last-child {
      border-right: none;
    }
    .name {
      margin-bottom: 10px;
      font-size: 36px;
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
    <div class="tabTop">
      <div class="itemTop">
        <span class="name">50</span>
        <span>本班人数</span>
      </div>
      <div class="itemTop">
        <span class="name">43</span>
        <span>已绑微信</span>
      </div>
    </div>
    <div class="userList">
      <div class="item" v-for="i in 2" :key="i">
        <div class="left">
          <img :src="require('@/images/teacher.png')">
          <span class="name">周声涛</span>
        </div>
        <span class="btnPrimary">添加微信</span>
      </div>
    </div>
  </div>
</template>

<script></script>
