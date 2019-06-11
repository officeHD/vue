<template>
    <div class="">
        <NavBar title="详情"></NavBar>
        <div class="introduce">
            <div class="title">详情标题</div>
            <div class="content">
                <div class="item">
                    <span>
                        项目
                        <i></i>
                    </span>
                    ： 奥术大
                </div>
                <div class="item">
                    <span>
                        是大法官
                        <i></i>
                    </span>
                    ： 奥术大
                </div>
                <div class="item">
                    <span>
                        是大法官
                        <i></i>
                    </span>
                    ： 奥术大
                </div>
                <div class="item">
                    <span>
                        是大法官
                        <i></i>
                    </span>
                    ：2019-10-12
                </div>
            </div>
        </div>
        <div class="introduce">
            <div class="detail">
                <p>给s文字包裹的span这个标签设置块元素这个标签设置块元素这个标签设置块元素这个标签设置块元素,给个最大宽度.添加text-align: justify;为了两端对齐 同时span:after 设置代码,并且给span设置浮动,为了后边的i...</p>
                <p>给s文字包裹的span这个标签设置块元素,给个最大宽度.添加text-align: justify;为了两端对齐 同时span:after 设置代码,并且给span设置浮动,为了后边的i...</p>
                <p>给s文字包裹的span , .添加text-align: justify;为了两端对齐 同时span:after 设置代码,并且给span设置浮动,为了后边的i...</p>
            </div>
        </div>
        <div class="btnBox"><button class="btnPrimary">下载附件</button></div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';

export default {
    computed: {},
    components: {
        NavBar,
        BlankLi
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.introduce {
    background-color: #fff;
    margin-top: 20px;
    padding: 0 20px;
    .title {
        border-bottom: 1px solid #e6e6e6;
        font-size: 32px;
        color: #000;
        text-align: center;
        line-height: 80px;
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 10px;
        .item {
            width: 50%;
            line-height: 1.5;
            font-size: 26px;

            color: #4a4a4a;
            display: flex;
            align-items: center;
            margin: 5px 0;
            span {
                height: 24px;
                line-height: 24px;
                width: 120px;
                text-align: justify;
                display: inline-block;
                overflow: hidden;
                vertical-align: top;
                i {
                    display: inline-block;
                    width: 100%;
                    height: 0;
                }
            }
        }
    }
    .detail {
        padding: 20px 0;
        p {
            text-indent: 2em;
            font-size: 28px;
            margin: 15px 0;
            line-height: 1.5;
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
}
</style>
