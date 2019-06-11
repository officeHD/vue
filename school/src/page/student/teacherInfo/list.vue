<template>
  <div class="tList">
    <NavBar title="教师风采"/>
    <div class="introduce">
      <div class="list">
        <div
          v-for="item in list"
          :key="item.sj_id"
          @click="current = item.sj_id;getTeacher(item.sj_name)"
          :class="['item',item.sj_id == current ? 'active' : '']"
        >{{ item.sj_name }}</div>
      </div>
      <div class="content">
        <router-link  v-for="(item , index) in teachers" :key="index" :to="{path:'teacherDetail',query:{id:item.id}}" class="item_list" >
          <div class="img">
            <img :src="item.path" :onerror="logo"  >
          </div>
          
          <p>{{item.username}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import { getSubject, getTeacherBysub } from "@/config/api";

export default {
  computed: {},
  components: {
    NavBar
  },

  data() {
    return {
      logo:'this.src="' + require('@/images/newIcon.png') + '"',
      current: "1",
      list: [],
      teachers:[]
    };
  },
  created() {
    getSubject(res => {
      if (res.status.toString() === "200") {
        this.list = res.data;
        this.current = res.data[0].sj_id;
        this.getTeacher(res.data[0].sj_name);
      }
      console.log(res);
    });
  },
  methods: {
    getTeacher(name) {
      getTeacherBysub({ sub_name: name }, res => {
        console.log(res);
        if(res.status.toString()==="200"){
            this.teachers=res.data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.tList {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.introduce {
  margin-top: 20px;
  background-color: #ffffff;
  display: flex;
  flex: 1;
  .list {
    width: 200px;
    border-right: 1px solid #e6e6e6;
    .item {
      height: 110px;
      text-align: center;
      line-height: 110px;
      font-size: 30px;
      color: #000;
      margin-right: -1px;
      position: relative;
      &.active {
        background: #21a4fe;
        color: #ffffff;
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-right: 12px solid #ffffff;
          right: 0;
          top: 49px;
        }
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 10px;
    .item_list {
      width: 50%;
      padding: 10px;
      display: block;
      text-align: center;
      .img{
        height: 180px;
        overflow: hidden;
        img{
         height: 100%;
         width: auto;
        }
      }
      p {
        font-size: 28px;
        color: #000;
        margin-top: 10px;
      }
    }
  }
}
</style>
