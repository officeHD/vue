<template>
  <div>
    <NavBar title="查询">
      <span class="iconfont iconxiaoxiguanli"></span>
    </NavBar>
    <div class="userCard" v-if="userType == '1'">
      <img :src="'http://47.96.171.165:8004'+user.qualification">
      <div class="content">
        <h3>张萌</h3>
        <p>工号：{{user.attach_id}}</p>
        <p>简介：206262002</p>
        <p>任课班级：206262002</p>
      </div>
    </div>
    <div class="mainNav" v-if="userType == '1'">
      <router-link class="item" to="/attendance">
        <img class="img" :src="require('@/images/021.png')" alt>
        <span>考勤记录</span>
      </router-link>
      <router-link class="item" to="/tresult">
        <img class="img" :src="require('@/images/022.png')" alt>
        <span>成绩查看</span>
      </router-link>
      <router-link class="item" to="/twork">
        <img class="img" :src="require('@/images/023.png')" alt>
        <span>作业通知</span>
      </router-link>
      <router-link class="item" to="/salary">
        <img class="img" :src="require('@/images/024.png')" alt>
        <span>工资明细</span>
      </router-link>
      <router-link class="item" to="/outlay">
        <img class="img" :src="require('@/images/025.png')" alt>
        <span>费用统计</span>
      </router-link>
      <router-link class="item" to="/ttimetable">
        <img class="img" :src="require('@/images/026.png')" alt>
        <span>教师课表</span>
      </router-link>
    </div>
    <img v-if="userType == '2'" :src="require('@/images/banner.jpg')">
    <div class="mainNav" v-if="userType == '2'">
      <router-link class="item" to="/introduce">
        <img class="img" :src="require('@/images/001.png')" alt>
        <span>学校简介</span>
      </router-link>
      <router-link class="item" to="/teacherInfo">
        <img class="img" :src="require('@/images/002.png')" alt>
        <span>教师风采</span>
      </router-link>
      <router-link class="item" to="/cost">
        <img class="img" :src="require('@/images/003.png')" alt>
        <span>费用明细</span>
      </router-link>
      <router-link class="item" to="/timetable">
        <img class="img" :src="require('@/images/004.png')" alt>
        <span>课表</span>
      </router-link>
      <router-link class="item" to="/homework">
        <img class="img" :src="require('@/images/005.png')" alt>
        <span>课后作业</span>
      </router-link>
      <router-link class="item" to="/results">
        <img class="img" :src="require('@/images/006.png')" alt>
        <span>成绩查询</span>
      </router-link>
      <router-link class="item" to="/health">
        <img class="img" :src="require('@/images/007.png')" alt>
        <span>体质状况</span>
      </router-link>
      <router-link class="item" to="/account">
        <img class="img" :src="require('@/images/008.png')" alt>
        <span>账号管理</span>
      </router-link>
    </div>
    <img class="noticeTop" :src="require('@/images/maintab.png')">
    <div class="noticeList">
      <ul>
        <li v-for="item in newsList" :key="item.nc_id">
          <img class="liicon" :src="require('@/images/liIcon.png')">
          <div>
            <p class="title">{{item.nc_title}}</p>
            <p class="time">{{item.nc_createtime | getDateString}}</p>
          </div>
        </li>
      </ul>
      <p class="moreList" v-if="newsList.length>3">点击查看更多 >></p>
    </div>
    <tabbar id="tabBar" style="position: fixed">
      <tabbar-item selected :link="{ path: '/main', replace: true }">
        <span class="label iconfont iconqiu" slot="label">校园</span>
      </tabbar-item>
      <tabbar-item :link="{ path: '/concat', replace: true }">
        <span class="label iconfont icontongxunlu" slot="label">通讯录</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Tabbar, TabbarItem, Group, Cell } from "vux";
import NavBar from "@/components/NavBar";
import { getNotice, jzginfo } from "@/config/api";

export default {
  computed: {
    ...mapState({
      userType: state => state.userType
    })
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    NavBar,
    Cell
  },
  data() {
    return {
      newsList: [],
      user: {}
    };
  },
  created() {
    getNotice(res => {
      if (res.status.toString() == "200") {
        this.newsList = res.data;
      }
    });
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["changeNewsType"]),
    onItemClick(item) {
      console.log(item);
    },
    getUserInfo() {
      jzginfo({ id: 1 }, res => {
        console.log(res);
        if (res.status.toString() === "200") {
          this.user = res.data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#tabBar {
  .weui-bar__item_on {
    .label {
      color: #5443e9;
    }
  }
}

.userCard {
  display: flex;
  background: #ffffff;
  margin-bottom: 20px;
  img {
    width: 240px;
    height: 240px;
    margin: 20px;
  }
  .content {
    flex: 1;
    padding: 20px;
    h3 {
      color: #000;
      font-size: 36px;
      margin: 15px 0;
      font-weight: 500;
    }
    p {
      color: #333333;
      margin: 10px 0;
      font-size: 28px;
    }
  }
}

.mainNav {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 20px 0;
  .item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    color: #000;
    font-size: 28px;
    .img {
      width: 100px;
      margin-bottom: 10px;
    }
  }
}
.noticeTop {
  margin-top: 20px;
}
.noticeList {
  background-color: #fff;
  padding-bottom: 180px;
  ul {
    padding: 20px;
    li {
      display: flex;
      padding: 20px;
      border-bottom: 1px solid #e6e6ee;
      &:last-child {
        border-bottom: none;
      }
      .liicon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .title {
        font-size: 32px;
        color: #000;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .time {
        font-size: 30px;
        color: #666;
        margin-bottom: 10px;
      }
    }
  }
  .moreList {
    text-align: center;
    color: #5541fb;
    padding: 20px;
  }
}
</style>
