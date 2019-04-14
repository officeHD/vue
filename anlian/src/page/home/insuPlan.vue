<template>
    <div class="insuPlan">
        <div v-if="varitayCode=='common'">
        <ul class="tab-tilte" >
            <li v-for="item in planData" :key="item.id" @click="cur = item.id" :class="{ active: cur ==item.id }">{{item.name}}</li>
        </ul>
         
        <div class="tab-content">
            <div class="tabItem"  >
                <ul>
                    <planItem v-for="item in planData[cur].lists" :key="item.id" :data="item"/>
                </ul>
            </div> 
        </div>
        <div class="betweenFlex calcFee">
            <label class="fee">￥<span class="money">{{planData[cur].defaultfee}}</span>起</label>
            <span class="calcBtn fn24">保费试算</span>
        </div>
        </div>
         
    </div>
</template>

<script>
import planItem from "./planItem";
export default {
  props: {
    planData: {
      default: {}
    }
  },
  components: { planItem },
  mounted() {
    this.varitayCode = sessionStorage.getItem("varitayCode");
    //  this.common=sessionStorage.getItem("key2");
  },
  data() {
    return {
      // woman:null,
      varitayCode: null,
      cur: 0, //默认选中第一个tab
      
    };
  },
  created() {
    console.log(this.planData);
  }
};
</script>

<style lang="less" scoped>
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.insuPlan {
  width: 95%;
  margin: 0 auto;
}

.tab-tilte {
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.tab-tilte li {
  flex: 1;

  text-align: center;

  cursor: pointer;
  background-color: #dfdfdf;
  height: 80px;
  line-height: 80px;
  font-size: 32px;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  background-color: #fff;
  color: #da2420;
  height: 93px;
  line-height: 93px;
  box-shadow: 0px -5px 10px -5px #333333;
}
.tab-content {
  background-color: #fff;
  .tabItem {
    width: 100%;
  }
}
.calcFee {
  background-color: #ffffff;
  height: 98px;
  padding: 0 20px;
}
.fee {
  color: #da2420;
  font-size: 28px;
}
.money {
  font-weight: 600;
  font-size: 44px;
}
.calcBtn {
  border: 1px solid #da2420;
  color: #da2420;
  padding: 8px 25px;
  display: inline-block;
  border-radius: 25px;
}
</style>
