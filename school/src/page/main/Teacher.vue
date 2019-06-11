<template>
  <div class="wrapper">
    <tab custom-bar-width="50px" active-color="#21A4FE" v-model="index">
      <tab-item
        class="vux-center"
        :selected="demo === item"
        v-for="(item, index) in list"
        @click="demo = item"
        :key="index"
      >{{ item }}</tab-item>
    </tab>
    <swiper :threshold="120" v-model="index" height="100%" :show-dots="false">
      <swiper-item>
        <div class="list">
          <Student/>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="list">
          <Tclass/>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Student from "./Student";
import Tclass from "./Tclass";
import {
  Tab,
  TabItem,
  Sticky,
  Divider,
  XButton,
  Swiper,
  SwiperItem
} from "vux";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      newsList: state => state.common.newsList
    })
  },
  components: {
    NavBar,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    Student,
    Tclass,
    SwiperItem
  },
  data() {
    return {
      index: 0,
      demo: "美食",
      list: ["联系人", "班级"],

      getBarWidth: function(index) {
        return (index + 1) * 22 + "px";
      }
    };
  },

  methods: {
    onItemClick(index) {
      console.log("on item click:", index);
    },
    addTab() {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1);
      }
    },
    removeTab() {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1);
      }
    },
    next() {
      if (this.index === this.list2.length - 1) {
        this.index = 0;
      } else {
        ++this.index;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = this.list2.length - 1;
      } else {
        --this.index;
      }
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.vux-slider {
  flex: 1;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.list {
  height: 100%;
  overflow-y: auto;
}
</style>
