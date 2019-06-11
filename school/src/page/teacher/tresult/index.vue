<template>
    <div class>
        <NavBar title="查询"></NavBar>
        <div class="userCard">
            <img :src="require('@/images/teacher.png')" />
            <div class="content">
                <h3>张萌</h3>
                <p>工号：206262002</p>
                <p>简介：206262002</p>
                <p>任课班级：206262002</p>
            </div>
        </div>
        <div class="tintroduce">
            <div class="title">
                <strong>查看科目</strong>
                <router-link class="more link" to="trestMore">更多</router-link>
            </div>
            <router-link to="subDetail" v-for="i in 2" :key="i" class="bb">
                <div class="title nobb">
                    <span>2019/03/27 语文</span>
                    <span class="iconfont iconright"></span>
                </div>
                <div class="lists">
                    <div class="list_item">
                        <span class="item_title">308</span>
                        <span>班级</span>
                    </div>
                    <div class="list_item">
                        <span class="item_title">110</span>
                        <span>平均分</span>
                    </div>
                    <div class="list_item">
                        <span class="item_title">120</span>
                        <span>最高分</span>
                    </div>
                    <div class="list_item">
                        <span class="item_title">90</span>
                        <span>最低分</span>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="tintroduce">
            <div class="title"><strong>年级统考</strong></div>
            <div class="title nobb">
                2019/03/27 初二年级期末考试
                <span class="iconfont iconright"></span>
            </div>
            <table class="table">
                <thead>
                    <tr class="primary">
                        <th>项目</th>
                        <th>检查结果</th>
                        <th>标准</th>
                        <th>单项得分</th>
                        <th>单项得分</th>
                        <th>单项得分</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 5" :key="i">
                        <td>得分</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
.bb {
    border-bottom: 1px solid #e6e6e6;
    display: block;
    &:last-child {
        border-bottom: none;
    }
}
.table {
    width: 100%;
    border-collapse: collapse;
    th {
        font-weight: normal;
        height: 82px;
    }
    tr {
        td {
            height: 108px;
        }
    }
    th,
    td {
        text-align: center;

        &:first-child {
            border-radius: 5px 0 0 5px;
        }
        &:last-child {
            border-radius: 0 5px 5px 0;
        }
    }
    tbody {
        tr {
            color: #000;
            background-color: #fff;
            &:nth-child(2n) {
                background-color: #f5f5f5;
            }
        }
    }
    .primary {
        background-color: #1fa2fd;
        color: #fff;
        border-radius: 5px;
    }
    .waring {
        background-color: #ee9a28;
        color: #fff;
        border-radius: 5px;
    }
}

.userCard {
    display: flex;
    background: #ffffff;
    margin-top: 20px;
    img {
        width: 240px;
        height: 240px;
        margin: 20px;
    }
    .content {
        flex: 1;
        padding: 20px;
        h3 {
            color: #000;
            font-size: 36px;
            margin: 15px 0;
            font-weight: 500;
        }
        p {
            color: #333333;
            margin: 10px 0;
            font-size: 28px;
        }
    }
}

.tintroduce {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #000;
        height: 100px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 5px;

        &.nobb {
            border-bottom: none;
            height: 120px;
        }
    }

    .total {
        text-align: center;
        padding: 20px 0;
        .fenshu {
            font-size: 34px;
            color: #000;
            font-weight: 600;
        }
        .time {
            margin-bottom: 10px;
        }
        border-bottom: 1px solid #e6e6e6;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        .item {
            border-right: 1px solid #e6e6e6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 33.333%;
            margin: 20px 0;
            font-size: 24px;
            color: #999;
            &:nth-child(3n) {
                border-right: none;
            }
            .item_title {
                color: #000;

                font-size: 30px;
            }
        }
    }
    .lists {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 0;
        .list_item {
            border-right: 1px solid #e6e6e6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            margin: 20px 0;
            font-size: 24px;
            color: #999;
            &:last-child {
                border-right: none;
            }
            .item_title {
                color: #000;

                font-size: 30px;
            }
        }
    }
}

.link {
    color: #1fa2fd;
    font-size: 26px;
}
</style>
