<template>
  <div class="wrapper">
    <NavBar title="查询">
      <span class="iconfont iconshijian" @click="confirmDate"></span>
    </NavBar>

    <div class="introduce">
      <div class="title">
        2019-10
        <router-link to="filter" class="link">智能筛选</router-link>
      </div>

      <div class="list">
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
        <div class="item">
          <span class="item_title">150</span>
          <span>姓名</span>
        </div>
      </div>
    </div>
    <div class="monthday">
      <MonthDay :markDateMore="arr"/>
      <img :src="require('@/images/cadar.jpg')" alt>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";
import MonthDay from "@/components/MonthDay";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi,
    MonthDay
  },
  data() {
    return {
      arr: [
        { date: "2019/05/1", className: "mark1" },
        { date: "2019/05/2", className: "mark2" },
        { date: "2019/05/3", className: "mark3" },
        { date: "2019/05/4", className: "mark4" },
        { date: "2019/05/5", className: "mark5" },
        { date: "2019/05/6", className: "mark6" }
      ]
    };
  },
  methods: {
    confirmDate() {
      let that = this;
      this.$vux.datetime.show({
        confirmText: "确定",
        cancelText: "取消",
        format: "YYYY-MM",
        // startDate:  ,
        endDate: new Date(),
        // value:   // 其他参数同 props
        onConfirm(value) {
          //查询该月份的考勤
          console.log(value);
        },
        onShow() {
          const _this = this;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.monthday {
  margin-top: 20px;
  padding: 20px 0;
  background: #ffffff;
}
.userCard {
  display: flex;
  background: #ffffff;
  margin-top: 20px;
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

.introduce {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #000;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 5px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      td {
        padding: 20px 0;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  }
  .total {
    text-align: center;
    padding: 20px 0;
    .fenshu {
      font-size: 34px;
      color: #000;
      font-weight: 600;
    }
    .time {
      margin-bottom: 10px;
    }
    border-bottom: 1px solid #e6e6e6;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    .item {
      border-right: 1px solid #e6e6e6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.333%;
      margin: 20px 0;
      font-size: 24px;
      color: #999;
      &:nth-child(3n) {
        border-right: none;
      }
      .item_title {
        color: #000;

        font-size: 30px;
      }
    }
  }
}
.mark1 {
  border-radius: 0;
  color: #fff;
  background-color: #00b6b1;
}
.mark2 {
  background-color: #4a91e3;
  color: #fff;
}
.mark3 {
  background-color: #999999;
  color: #fff;
}
.mark4 {
  background-color: #ffcc01;
  color: #fff;
}
.mark5 {
  background-color: #ffffff;
  color: #000;
}
.mark6 {
  background-color: #e483ea;
  color: #fff;
}
.link {
  color: #1fa2fd;
  font-size: 26px;
}
</style>
