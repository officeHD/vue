<template>
    <div class="tmwrapper">
        <NavBar title="学生课表">
            <router-link v-if="index=='1'" to="noticeHistory" class="link">更多</router-link >
            <router-link v-if="index=='0'" to="tworkHistory" class="link">更多</router-link >
        </NavBar>
        <div class="introduce">
            <tab custom-bar-width="40px" active-color="#21a4fe" v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{ item }}</tab-item>
            </tab>
            <swiper :threshold="120" v-model="index" height="100%" :show-dots="false">
                <swiper-item v-for="(item, index) in list" :key="index">
                    <div class="list">
                         <router-link class="item" v-for="i in 7" :key="i" to="homeworkDetail">
                            <div class="title">
            <span class="name">语文</span>
            <span class="time">2018-10-10</span>
          </div>
          <p>阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的阿达的</p>
                        </router-link>
                    </div>
                </swiper-item>
            </swiper>
        </div>
        <div class="add">
            <router-link  :to="{ path: index=='1'?'addnotice':'addwork'}"   class="link"><img :src="require('@/images/add.png')" alt=""></router-link >
            
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux';
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
            demo2: '作业',
            list: ['作业', '通知']
        };
    },

    methods: {}
};
</script>

<style lang="less" scoped>

.link {
    color: #1fa2fd;
    font-size: 28px;
}
.tmwrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .add{
        position: fixed;
        bottom: 50px;
        right: 50px;
        width: 100px;
        height: 100px;
        a{
            display: block;
        }
        img{
            width: 100px;
        height: 100px;
        border-radius: 50%;  
        }
    }
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
    padding-bottom: 200px;
     height: 100%;
        overflow-y: auto;
    .item {
      padding: 20px 0;
      display: block;
      border-bottom: 1px solid #e6e6e6;
      &:last-child {
        border-bottom: none;
      }
      .title {
        font-size: 30px;
        color: #000;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .name {
          font-size: 32px;
          color: #000;
        }
        .time {
          font-size: 28px;
          color: #999;
        }
      }
      p {
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #888888;
        font-size: 28px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
