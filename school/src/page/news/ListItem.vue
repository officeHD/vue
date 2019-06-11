<template>
    <div class="wrapper">
        <scroller lock-x height="100%" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="newContent">
                <router-link to="newsDetail" class="boxItem" v-for="i in bottomCount" :key="i">
                    <img :src="require('@/images/newIcon.png')" />
                    <div class="item_content">
                        <p class="title">vux中组件的点击事件要用@click.native="",尤其是 最容易忘。 vue中,你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时,...</p>
                        <p class="time">2019-12-21 12:20:20</p>
                    </div>
                </router-link>
                <load-more tip="loading"></load-more>
            </div>
        </scroller>
    </div>
</template>
<script>
import { Scroller, LoadMore } from 'vux';
export default {
    components: {
        Scroller,
        LoadMore
    },
    props: {
        newsId: String
    },
    data() {
        return {
            bottomCount: 20
        };
    }, 
    methods: {
        onScrollBottom() {
            if (this.onFetching) {
                // do nothing
            } else {
                this.onFetching = true;
                setTimeout(() => {
                    this.bottomCount += 10;
                    this.$nextTick(() => {
                        this.$refs.scrollerBottom.reset();
                    });
                    this.onFetching = false;
                }, 2000);
            }
        }
    }
};
</script>
<style lang="less" scoped>
.newContent {
    padding: 0 20px;
    background-color: #fff; 
    .boxItem {
        text-align: center;
        padding: 20px 0;
        display: flex;
        margin: 20px 0;
        border-bottom: 1px solid #e6e6e6;
        justify-content: space-between;
        img {
            width: 200px;
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
            .title {
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
</style>
