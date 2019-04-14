<template>
  <div class="wrapper">
    
    <div class="content">
      <div class="messageWrite">
        <p class="messageWriteL"></p>
        <p class="messageWriteR">投保人信息填写</p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">姓名</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入真实姓名">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">手机号码</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入手机号" maxlength="11">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">证件类型</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请选择证件类型" maxlength="18">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">证件号</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入证件号" maxlength="18">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">证件有效期</p>
        <p class="boxMessageWriteR identity">
          <Datetime title placeholder="请选择" v-model="date" @on-confirm="confirmDate"></Datetime>
          <span class="identityTChoose">长期有效</span>
          <input type="checkbox" class="checkBox">
        </p>
      </div>
      <div class="box photoBox">
        <p class="boxMessageWriteL">证件影像</p>
        <p class="boxMessageWriteR photoBox"></p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">电子邮箱</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入邮箱号">
          <i data-v-19455e20 class="iconfont icon iconjiantouarrow487"></i>
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">投保地区</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入手机号" maxlength="11">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">详细地址</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="安徽省 合肥市 庐阳区" maxlength="11">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">邮政编码</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入邮政编码">
        </p>
      </div>
      <div class="messageWrite">
        <p class="messageWriteL"></p>
        <p class="messageWriteR">被投保人信息填写</p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">投保关系</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请输入邮政编码">
        </p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">职业</p>
        <p class="boxMessageWriteR">
          <input type="text" placeholder="请选择职业">
        </p>
      </div>
      <div class="messageWrite">
        <p class="messageWriteL"></p>
        <p class="messageWriteR">受益人信息</p>
      </div>
      <div class="box">
        <p class="boxMessageWriteL">受益人</p>
        <p class="boxMessageWriteR">
          <span class="interestsPeople">法定受益人</span>
        </p>
      </div>
      <div class="accept">
        <div class="acceptContent">
          <p class="acceptLeft">
            <input type="checkbox" class="acceptCheckBox">
          </p>
          <p class="acceptRight">
            我已阅读并同意此保险的
            <span class="lawer">保险条款</span>
            <span class="lawer">投保须知</span>
            <span class="lawer">人身保险提示书</span>
            <span class="lawer">告知声明</span>
          </p>
        </div>
        <div class="acceptContent">
          <p class="acceptLeft">
            <input type="checkbox" class="acceptCheckBox">
          </p>
          <p class="acceptRight">
            本人声明投保人仅为
            <span class="lawer">中国税收居民</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomContent">
        <span class="money">200</span>元
      </div>
      <div class="bottomContent active">立即支付</div>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vux";

export default {
  components: {
    Datetime
  },
  data() {
    return {
      date: ""
    };
  },

  created: function() {},
  methods: {
      confirmDate(val){
          console.log(val)
      },
    prev() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.top {
  width: 100%;
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
    letter-spacing: 2px;
  }
  .navRight {
    width: 50px;
    height: 50px;
  }
}
.content {
  width: 100%;
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
  background: #fff;
  background-size: cover;
  .messageWrite {
    width: 100%;
    height: 78px;
    background: #f2f2f2;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .messageWriteL {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    margin-left: 54px;
  }
  .messageWriteR {
    font-size: 26px;
    color: #333;
    display: block;
  }
  .box {
    border: red solid 1px;
    width: 100%;
    padding: 0 30px;
    border-bottom: #f2f2f2f2 solid 4px;
    height: 74px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .boxMessageWriteL {
    font-size: 26px;
    display: block;
    color: #333;
    // margin-right: 47px;
  }
  .boxMessageWriteR {
    width: 441px;
    height: 74px;
  }
  input {
    width: 98%;
    height: 90%;
    font-size: 26px;
    color: #333;
  }
  input::-webkit-input-placeholder {
    font-size: 26px;
    vertical-align: middle;
    line-height: 74px;
  }
  .photoBox {
    height: 179px;
  }
  .identity {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .identityChoose {
    font-size: 26px;
    color: #333;
  }
  .checkBox {
    width: 30px;
    height: 30px;
    // -webkit-appearance: none;
    background-color: transparent;

    border: #f2f2f2 2px solid;
  }
  .interestsPeople {
    font-size: 26px;
    color: #333;
    line-height: 74px;
  }
  .accept {
    width: 100%;
    height: 164px;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .acceptContent {
    width: 646px;
    // height: 143px;
    display: flex;
    flex-direction: row;
    background: #f2f2f2;
  }
  .acceptLeft {
    width: 50px;
    height: 50px;
    margin-top: 26px;
  }
  .acceptCheckBox {
    width: 30px;
    height: 30px;
  }
  .acceptRight {
    color: #666;
    font-size: 24px;
    padding: 15px 0;
  }
  .lawer {
    border-bottom: #da251e solid 2px;
    color: #da251e;
    margin: 20px 8px;
    line-height: 44px;
  }
}
.bottom {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .bottomContent {
    width: 50%;
    height: 100px;
    font-size: 28px;
    text-align: center;
    color: #da251e;
    line-height: 100px;
  }
  .money {
    line-height: 100px;
  }
  .active {
    background: #da251e;
    color: #fff;
  }
}
</style>
