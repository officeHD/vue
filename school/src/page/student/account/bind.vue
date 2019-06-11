<template>
    <div class="">
        <NavBar title="绑定学生"></NavBar>

        <div class="introduce">
            <BlankLi title="省市镇区">33333</BlankLi>
            <BlankLi title="学校名称">33333</BlankLi>
            <BlankLi title="账号">33333</BlankLi>
            <BlankLi title="密码">33333</BlankLi>
        </div>
         <div class="btnBox">
        <button class="btnPrimary"  >立即绑定</button>
         </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';

export default {
    computed: {},
    components: {
        NavBar,
        BlankLi
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.time {
    padding: 20px;
}
.introduce {
    padding: 0 20px;
    margin: 20px 0;
    background-color: #fff;
}
.btnBox {
  padding: 40px 20px;
  width: 100%;
}
.btnPrimary  {
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
 
.link {
    color: #1fa2fd;
    font-size: 28px;
}
</style>
