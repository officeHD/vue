<template>
    <div class="tmwrapper">
        <NavBar title="学生课表"></NavBar>
        <div class="introduce">
            <tab custom-bar-width="40px" active-color="#21a4fe" v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{ item }}</tab-item>
            </tab>
            <swiper :threshold="120" v-model="index" height="100%" :show-dots="false">
                <swiper-item v-for="(item, index) in list" :key="index">
                    <div class="list">
                        <div class="listitem" v-for="(items, index) in 20" :key="index">
                            <div class="left">1</div>
                            <div>
                                <p>Hbuilder增加</p>
                                <p>Hbuilder增加</p>
                                <p>Hbuilder增加</p>
                            </div>
                        </div>
                    </div>
                </swiper-item>
            </swiper>
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
            demo2: '一',
            list: ['一', '二', '三', '四', '五', '六', '日']
        };
    },

    methods: {}
};
</script>

<style lang="less" scoped>
.tmwrapper {
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
