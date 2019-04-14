<template>
  <div class="home_container">
    
    <div>
      <img class="bannerImg" src="../../images/banner01.jpg">
    </div>

    <div class="introduce">
      <span class="fz24">该产品由京东安联财产保险有限公司承保并理赔</span>
      <img class="logoImg" src="../../images/logo.png">
    </div>
    <insuPlan :planData="insureDatas.planData"/>
    <detailPlan :insureDatas="insureDatas"/>
  </div>
</template>

<script>
import insuPlan from "./insuPlan";
import detailPlan from "./detailPlan";
import { insureData } from "@/store/data.js";

export default {
  name: "home",
  components: {
    insuPlan,
    detailPlan
  },
  created() {
    this.varitayCode = sessionStorage.getItem("varitayCode");
    this.insureDatas = insureData.find(
      item => item.varitayCode == this.varitayCode
    );
    console.log(this.insureDatas);
  },
  mounted() {
    // this.common=sessionStorage.getItem("key2");
  },
  data() {
    return {
      varitayCode: null,
      insureDatas: null
    };
  }
};
</script>

<style lang="less" scoped>
.home_container {
}
.nav {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  // position: fixed;
  // top: 0;
  .navLeft {
    width: 50px;
    height: 50px;
  }
  .navMid {
    width: 335px;
    height: 80px;
    line-height: 80px;
    color: #333;
    font-size: 32px;
    text-align: center;
  }
  .navRight {
    width: 50px;
    height: 50px;
  }
}
.bannerImg {
  width: 100%;
  display: block;
}
.introduce {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  align-items: center;
  margin-bottom: 20px;
  .logoImg {
    width: 103px;
  }
}
.fz24 {
  font-size: 28px;
  color: #999;
}
</style>
