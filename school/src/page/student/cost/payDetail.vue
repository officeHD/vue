<template>
  <div class>
    <NavBar title="缴费详情"></NavBar>
    <div class="introduce">
      <p class="title">交费信息</p>
      <BlankLi title="交易名称">￥5000.00</BlankLi>
      <BlankLi title="交易时间">￥5000.00</BlankLi>
      <BlankLi title="交易单号">￥5000.00</BlankLi>
      <BlankLi title="交易状态">￥5000.00</BlankLi>
    </div>
    <div class="introduce">
      <p class="title">交费详情</p>
      <div class="subD">
        <BlankLi title="收费项目:">
          <div class="subItem">学费000</div>
          <div class="subItem">学费000</div>
          <div class="subItem">学费000</div>
          <div class="subItem">学费000</div>
        </BlankLi>
        <BlankLi title="总计金额:">
          <div class="subItem">200.00</div>
        </BlankLi>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";
import { chargedetail } from "@/config/api";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi
  },
   created(){
    chargedetail({id:1},res=>{
      console.log(res)
    })
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.introduce {
  background-color: #fff;
  margin-top: 20px;
  padding: 0 20px;
  .title {
    border-bottom: 1px solid #e6e6e6;
    height: 100px;
    line-height: 100px;
    color: #000;
    font-weight: 600;
  }
  .subD {
    padding: 10px 0;
  }
  .subItem {
    text-align: right;
    padding: 5px;
  }
}
</style>
