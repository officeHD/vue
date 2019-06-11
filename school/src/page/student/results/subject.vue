<template>
    <div class="">
        <NavBar title="查询"></NavBar>
        <p class="info">
            <label>姓名：</label>
            <label>姓名：</label>
        </p>
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
        <div class="introduce">
            <v-chart :data="data" >
                 
                 <v-legend :options="legendOptions" />
                <v-line series-field="type" /></v-chart>
        </div>
        <div class="introduce">
            <table>
                <tbody>
                    <tr>
                        <td>时间</td>
                        <td>
                            2019
                            <br />
                            03/26
                        </td>
                        <td>
                            2019
                            <br />
                            03/26
                        </td>
                        <td>
                            2019
                            <br />
                            03/26
                        </td>
                        <td>
                            2019
                            <br />
                            03/26
                        </td>
                        <td>
                            2019
                            <br />
                            03/26
                        </td>
                    </tr>
                    <tr>
                        <td>得分</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                    </tr>
                    <tr>
                        <td>得分分</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                        <td>03/26</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="introduce">
             
            <div class="total">
                <p class="fenshu">分析</p>
               
            </div>
            <div class="list">
                <div class="item">
                    <span class="item_title">趋势：</span>
                    <span>姓名</span>
                </div>
                <div class="item">
                    <span class="item_title">趋势：</span>
                    <span>姓名</span>
                </div>
                <div class="item">
                    <span class="item_title">趋势：</span>
                    <span>姓名</span>
                </div>
                <div class="item">
                    <span class="item_title">综合评价：</span>
                    <span>姓名姓名综合评价综合评价综合评价综合评价综合评价综合评价综合评价姓名姓名姓名</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';
import { VChart, VTooltip, VLine, VScale,VLegend } from 'vux';
export default {
    computed: {},
    components: {
        NavBar,
        BlankLi,
        VChart,
        VTooltip,
        VLine,
        VScale,VLegend
    },
    data() {
        return {
            legendOptions:{
                position: 'bottom',
            },
            data: [
                { date: '11-11', type: '能源', value: 116 },
                { date: '11-12', type: '能源', value: 129 },
                { date: '11-13', type: '能源', value: 135 },
                { date: '11-14', type: '能源', value: 86 }, 
                { date: '11-11', type: '能源1', value: 106 },
                { date: '11-12', type: '能源1', value: 109 },
                { date: '11-13', type: '能源1', value: 105 },
                { date: '11-14', type: '能源1', value: 56 },
                 { date: '11-11', type: '能源2', value: 136 },
                { date: '11-12', type: '能源2', value: 139 },
                { date: '11-13', type: '能源2', value: 145 },
                { date: '11-14', type: '能源2', value: 96 },
                
            ]
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.info {
    background-color: #fff;
    padding: 20px;
    color: #000;
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

.introduce {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #000;
        height: 80px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 5px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        tr {
            td {
                padding: 20px 0;
                border-bottom: 1px solid #e6e6e6;
                text-align: center;
            }
            &:last-child {
                td {
                    border-bottom: none;
                }
            }
        }
    }
    .total {
        text-align: center;
        padding: 10px 0;
        .fenshu {
            font-size: 32px;
            color: #000;
         
        }
        .time {
            margin-bottom: 10px;
        }
        
    }
    .list {
       
         
        .item {
            
         
            margin: 10px 0;
            font-size: 28px;
            color: #999;
             
            .item_title {
                color: #000;

                
            }
        }
    }
}

.link {
    color: #1fa2fd;
    font-size: 26px;
}
</style>
