<template>
    <div class="">
        <NavBar title="费用统计"> </NavBar>
        <div class="introduce">
            <p class="tips">基本收费标准</p>
            <div class="searchBox">
                <div class="select">
                    2017-2018
                    <span class="iconfont iconsanjiaoxing"></span>
                </div>
                <div class="select">
                    第一科目
                    <span class="iconfont iconsanjiaoxing"></span>
                </div>
                <button class="btnDefault">查询</button>
            </div>
        </div>
        <div class="costList">
            <router-link  to="/costDetail" class="item" v-for="i in 3" :key="i">
                <div class="title">
                    初一
                    <x-icon type="ios-arrow-right" size="30"></x-icon>
                </div>
                <div class="content">
                    <div class="citem">学费：0000.00</div>
                    <div class="citem">学费：0000.00</div>
                    <div class="citem">学费：0000.00</div>
                    <div class="citem">学费：0000.00</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
    computed: {},
    components: {
        NavBar
    },

    methods: {}
};
</script>

<style lang="less" scoped>
.introduce {
    background-color: #f5f5f5;
    .tips {
        padding: 20px;
    }
    .searchBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        .select {
            height: 70px;
            line-height: 70px;
            border: 1px solid #e9e9e9;
            border-radius: 5px;
            flex: 1;
            margin: 0 15px;
            padding: 0 20px;
            font-size: 28px;
            background-color: #ffffff;
            color: #000;
            display: flex;
            justify-content: space-between;
            .iconsanjiaoxing {
                font-size: 24px;
                color: #858585;
            }
        }
        .btnDefault {
            height: 70px;
            position: relative;
            display: block;
            margin: 0 15px;
            box-sizing: border-box;
            font-size: 32px;
            text-align: center;
            text-decoration: none;
            line-height: 70px;
            border-radius: 5px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            overflow: hidden;
            width: 120px;
            border-width: 0;
            outline: 0;
            -webkit-appearance: none;
            color: #ffffff;
            background-color: #21a4fe;
        }
    }
}
.link {
    color: #1fa2fd;
    font-size: 28px;
}
.costList {
    .item {
        padding: 0 20px;
        background-color: #ffffff;
        margin-bottom: 20px;
        display: block;
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 32px;
            height: 100px;
            color: #000;
            border-bottom: 1px solid #e4e4e4;
            font-weight: 600;
            padding-left: 10px;
        }
        .content {
            display: flex;
            flex-wrap: wrap;
            padding: 20px 0;
            .citem {
                width: 50%;
                margin: 10px 0;
                color: #000;
                font-size: 30px;
            }
        }
    }
}
</style>
