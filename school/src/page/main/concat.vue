<template>
  <div class="concat">
    <Teacher v-if="userType == '1'"/>
    <Student v-if="userType == '2'"/>
    <div id="tabBar">
      <tabbar>
        <tabbar-item :link="{ path: '/main', replace: true }">
          <span class="label iconfont iconqiu" slot="label">校园</span>
        </tabbar-item>
        <tabbar-item selected :link="{ path: '/concat', replace: true }">
          <span class="label iconfont icontongxunlu" slot="label">通讯录</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Tabbar, TabbarItem } from "vux";
import Teacher from "./Teacher";
import Student from "./Student";

export default {
  computed: {
    ...mapState({
      userType: state => state.userType
    })
  },
  components: {
    Tabbar,
    TabbarItem,
    Student,
    Teacher
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
#tabBar {
  height: 100px;
  .weui-bar__item_on {
    .label {
      color: #5443e9;
    }
  }
}
.concat {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
