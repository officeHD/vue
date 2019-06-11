<template>
  <div class>
    <NavBar title="历史作业">
      <span class="link">筛选</span>
    </NavBar>
    <div class="inputBox">
      <input placeholder="请输入内容">
      <span class="iconfont iconsousuo"></span>
    </div>
    <div class="introduce">
      <div class="list">
        <router-link class="item" v-for="i in 7" :key="i" to="homeworkDetail">
          <div class="title">
            <span class="name">语文</span>
            <span class="time">2018-10-10</span>
          </div>
          <p>阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi
  },
  methods: {}
};
</script>

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
.introduce {
  background-color: #fff;
  margin-top: 20px;
  padding: 0 20px;
  .list {
    padding: 0 20px;
    .item {
      padding: 20px 0;
      display: block;
      border-bottom: 1px solid #e6e6e6;
      &:last-child {
        border-bottom: none;
      }
      .title {
        font-size: 30px;
        color: #000;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .name {
          font-size: 32px;
          color: #000;
        }
        .time {
          font-size: 28px;
          color: #999;
        }
      }
      p {
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #888888;
        font-size: 28px;
        margin-bottom: 10px;
      }
    }
  }
}

.link {
  color: #1fa2fd;
  font-size: 28px;
}
</style>
