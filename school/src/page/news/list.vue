<template>
    <div class="wrapper">
        <NavBar title="资讯" main="true"><router-link class="iconfont icontag" to="newsCheck"></router-link></NavBar>
        <tab :line-width="2" active-color="#fc378c" v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in newsList" @click="demo2 = item" :key="index">{{ item.name }}</tab-item>
        </tab>
        <swiper v-model="index" height="100%" :show-dots="false">
            <swiper-item v-for="(item, index) in newsList" :key="index"><ListItem :newsId="item.id" /></swiper-item>
        </swiper>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ListItem from './ListItem';

import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux';
const list = () => ['精选', '美食', '电影', '酒店', '外卖'];
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            newsList: state => state.common.newsList
        })
    },
    components: {
        NavBar,
        ListItem,
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
            index01: 0,
            list2: list(),
            demo2: '美食',
            list3: ['收到的消息', '发出的消息'],
            demo3: '收到的消息',
            list4: ['正在放映', '即将上映'],
            demo4: '即将上映',
            demoDisabled: 'A',
            index: 0,
            getBarWidth: function(index) {
                return (index + 1) * 22 + 'px';
            }
        };
    },
    methods: {
        switchTabItem(index) {
            console.log('on-before-index-change', index);
            this.$vux.loading.show({
                text: 'loading'
            });
            setTimeout(() => {
                this.$vux.loading.hide();
                this.index01 = index;
            }, 1000);
        },
        onItemClick(index) {
            console.log('on item click:', index);
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

<style lang="less">
.vux-slider {
    flex: 1;
}
.wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
