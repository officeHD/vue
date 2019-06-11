<template>
  <div class="wrapperTimer">
    <NavBar title="学生课表"></NavBar>
    <div class="introduce">
      <tab custom-bar-width="40px" active-color="#21a4fe" v-model="index">
        <tab-item
          class="vux-center"
          :selected="demo2 === item"
          v-for="(item, index) in list"
          @click="demo2 = item"
          :key="index"
        >{{ item }}</tab-item>
      </tab>
      <swiper :threshold="120" v-model="index" height="100%" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="list">
            <div class="listitem" v-for="(items, index) in 8" :key="index">
              <div class="left">{{index+1}}</div>
              <div>
                <h3>语文</h3>
                <p>逸夫楼202</p>
                <p>8:00-8:45</p>
              </div>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import {
  Tab,
  TabItem,
  Sticky,
  Divider,
  XButton,
  Swiper,
  SwiperItem
} from "vux";
export default {
  computed: {},

  components: {
    NavBar,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      index: 0,
      demo2: "一",
      list: ["一", "二", "三", "四", "五", "六", "日"]
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.wrapperTimer {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.introduce {
  // background-color: #ffffff;
  flex: 1;
  display: flex;
  flex-direction: column;
  .vux-slider {
    flex: 1;
    margin-top: 20px;
    background-color: #ffffff;
  }
  .list {
    padding: 0 20px;
    height: 100%;
    overflow-y: auto;
    .listitem {
      padding: 20px 0;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: none;
      }
      h3 {
        font-size: 30px;
        color: #000;
      }
      .left {
        width: 120px;
        text-align: center;
        color: #21a4fe;
        font-size: 30px;
      }
    }
  }
}
</style>
