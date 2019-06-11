<template>
  <div class>
    <NavBar title="工资明细">
        <span class="link" @click="confirmDate">选择日期</span>
    </NavBar>
    
    <p class="tips">2019年3月</p>
    <div class="salary">
      
      <table class="table">
        <thead>
          <tr class="primary">
            <th>明细</th>
            <th>金额</th>
            <th>备注</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>得分</td>
            <td>03/26</td>
            <td>03/26</td> 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi
  },
  methods: {
     confirmDate() {
      let that = this;
      this.$vux.datetime.show({
        confirmText: "确定",
        cancelText: "取消",
        format:"YYYY-MM",
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
    },
  }
};
</script>

<style lang="less" scoped>
.tips{
    padding: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  th {
    font-weight: normal;
    height: 82px;
  }
  tr {
    td {
      height: 108px;
    }
  }
  th,
  td {
    text-align: center;

    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
  tbody {
    tr {
      color: #000;
      background-color: #fff;
      &:nth-child(2n) {
        background-color: #F5F8FF;
      }
    }
  }
  .primary {
    background-color: #1fa2fd;
    color: #fff;
    border-radius: 5px;
  }
  .waring {
    background-color: #ee9a28;
    color: #fff;
    border-radius: 5px;
  }
}
 
.salary {
  background-color: #fff;
  padding: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #000;
    height: 100px;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 5px;
    .more {
      font-size: 28px;
    }
    &.nobb {
      border-bottom: none;
      height: 120px;
    }
  }
  
  
}

.link {
  color: #1fa2fd;
  font-size: 26px;
}
</style>
