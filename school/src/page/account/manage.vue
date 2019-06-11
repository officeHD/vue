<template>
  <div>
    <p class="title">当前账号</p>
    <div class="p20" v-if="userType=='1'">
      <BlankLi title="工号">33333</BlankLi>
      <BlankLi title="教师">33333</BlankLi>
      <BlankLi title="学校">33333</BlankLi>
    </div>
    <div class="p20" v-if="userType=='2'">
      <BlankLi title="学生">33333</BlankLi>
      <BlankLi title="手机号">33333</BlankLi>
    </div>
    <div class="btnBox">
      <button class="btnDefault">解除绑定</button>
      <button class="btnPrimary" v-if="userType=='2'" >换绑手机</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BlankLi from "@/components/BlankLi";
export default {
  computed: {
    ...mapState({
      userType: state => state.userType
    })
  },
  components: {
    BlankLi
  },
  methods: {
    ...mapActions(["changeNewsType"]),
    onItemClick(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.title{
    padding: 20px;
    color: #999999;
}
.p20 {
  padding: 0 20px;
  background: #ffffff;
}
.btnBox {
  padding: 40px 20px;
  width: 100%;
}

.btnPrimary,
.btnDefault {
  height: 90px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
  line-height: 90px;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  width: 100%;
  border-width: 0;
  outline: 0;
  -webkit-appearance: none;
  margin: 20px 0;
}
.btnPrimary {
  color: #ffffff;
  background-color: #0090ed;
}
.btnDefault {
  background-color: #e6e6e6;
  color: #e5222a;
}
</style>
