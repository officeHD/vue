<template>
    <div>
        <div class="head">
            <h2 class="center">选择您感兴趣的内容</h2>
            <p class="center">至少选择4个标签</p>
        </div>
        <div class="checkBox">
            <div
                class="item"
                v-for="(item, index) in newsTypeArr"
                :key="item.id"
                @click="changeNewsType({ index: index, val: !item.ischeck })"
                :class="[item.ischeck ? 'active' : '']"
            >
                <div class="img">
                    <img :src="require('@/images/check.jpg')" alt />
                    <span class="iconfont iconselected"></span>
                </div>
                <span>小学教育</span>
            </div>
        </div>
        <div class="btnBox"><button class="btnPrimary" @click="sureCheck">确定</button></div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            newsTypeArr: state => state.common.newsTypeArr
        }),
        newsLength() {
            
            let checkArr=this.newsTypeArr.filter((item)=>item.ischeck)
            return checkArr.length;
        }
    },
    components: {},
    methods: {
        ...mapActions(['changeNewsType']),
        onItemClick(item) {
            console.log(item);
        },
        sureCheck() {
            if (this.newsLength < 4) {
                console.log(this.newsLength);
                this.$vux.toast.text('至少选择4个标签','middle');
                return false;
            }
            
            window.location.href="#/"
        }
    }
};
</script>

<style lang="less">
.head {
    padding: 30px 0;
    h2 {
        font-size: 36px;
        font-weight: 500;
        color: #000;
        margin-bottom: 20px;
    }
    p {
        color: #666;
    }
}
.center {
    text-align: center;
}
.checkBox {
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 20px 0;
    .item {
        width: 33.333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 30px;
        font-size: 28px;
        color: #000;

        &.active {
            .img {
                img {
                    border: 1px solid #0090ed;
                }
                .iconselected {
                    opacity: 1;
                }
            }
        }

        .img {
            position: relative;
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
            border-radius: 50%;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            .iconselected {
                opacity: 0;
                position: absolute;
                bottom: 0;
                right: 0;
                color: #0090ed;
            }
        }
    }
}
.btnBox {
    padding: 40px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-top: 1px solid #e6e6e6;
}
.btnPrimary {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 32px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    width: 100%;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: #0090ed;
}
</style>
