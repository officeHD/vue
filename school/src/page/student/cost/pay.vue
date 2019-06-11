<template>
  <div class>
    <NavBar title="在线缴费">
      <router-link class="link" to="/payHistory">缴费记录</router-link>
    </NavBar>
    <div>
      <p class="title">需要缴纳</p>
      <div class="introduce">
        <router-link to="payDetail" class="boxItem" v-for="item in feeList" :key="item.id">
          <img :src="require('@/images/newIcon.png')">
          <div class="item_content">
            <p class="item_title">{{item.name}}</p>
            <p class="time">报名开始：{{item.start_time|getDateString}} </p>
            <p class="time">报名结束：{{item.end_time|getDateString}}</p>
          </div>
        </router-link>
      </div>
      <p class="title">选择缴纳</p>
      <div class="introduce">
        <router-link to="payDetail" class="boxItem" v-for="i in 2" :key="i">
          <img :src="require('@/images/newIcon.png')">
          <div class="item_content">
            <p class="item_title">2018-2019学年上半学期学费书本费</p>
            <p class="time">报名时间2019-12-21 -2019-12-30</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BlankLi from "@/components/BlankLi";
import { feelist } from "@/config/api";

export default {
  computed: {},
  components: {
    NavBar,
    BlankLi
  },
  data(){
    return{
      feeList:[]
    }
  },
  created(){
    feelist({year:8,term:5},res=>{
      console.log(res)
      if(res.status.toString()==="200"){
        this.feeList=res.data;
      }
    })
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.title {
  padding: 20px;
  color: #666;
}
.introduce {
  background-color: #fff;
  padding: 0 20px;
  .boxItem {
    text-align: center;
    padding: 20px 0;
    display: flex;

    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      border-bottom: none;
    }
    img {
      width: 236px;
      height: 100%;
      margin-right: 20px;
    }
    .item_content {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      .time {
        color: #999;
      }
      .item_title {
        color: #000;
        font-size: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
        margin-bottom: 20px;
      }
    }
  }
}

.link {
  color: #1fa2fd;
  font-size: 28px;
}
</style>
