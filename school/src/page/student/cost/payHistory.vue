<template>
  <div class>
    <NavBar title="缴费记录"></NavBar>
    <div class="inputBox">
      <input placeholder="请输入内容">
      <span class="iconfont iconsousuo"></span>
    </div>
    <div class="introduce">
      <router-link to="payDetail" class="boxItem" v-for="i in 3" :key="i">
        <img :src="require('@/images/newIcon.png')">
        <div class="item_content">
          <p class="item_title">2018-2019学年上半学期学费书本费</p>
          <p class="time">
            共计 18000.00 元
            <span class="link">交易成功</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";
import { chargefee } from "@/config/api";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi
  },
   created(){
    chargefee({id:1},res=>{
      console.log(res)
    })
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.inputBox {
  display: flex;
  margin: 20px;
  height: 70px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;

  input {
    padding-left: 20px;
    flex: 1;
    border: none;
    height: 100%;
    &:focus {
      outline: none;
    }
  }

  .iconsousuo {
    width: 100px;
    text-align: center;
    font-size: 38px;
    color: #929292;
  }
}

.link {
  color: #1fa2fd;
  font-size: 28px;
}
.introduce {
  background-color: #fff;
  padding: 0 20px;
  .boxItem {
    text-align: center;
    padding: 30px 0;
    display: flex;

    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      border-bottom: none;
    }
    img {
      width: 236px;
      height: 100%;
      margin-right: 20px;
    }
    .item_content {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      .time {
        color: #999;
        display: flex;
        justify-content: space-between;
        .link {
          font-size: 24px;
        }
      }
      .item_title {
        color: #000;
        font-size: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
