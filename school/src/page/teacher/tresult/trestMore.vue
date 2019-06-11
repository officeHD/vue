<template>
    <div class="">
        <NavBar title="年级统考"></NavBar>
        <p class="info">
            <label>姓名：</label>
            <label>姓名：</label>
        </p>
        <div class="inputBox">
            <input placeholder="请输入内容" />
            <span class="iconfont iconsousuo"></span>
        </div>
        <div class="echartsBox">
            <div class="searchBox">
                <div class="select">
                    本学期
                    <span class="iconfont iconsanjiaoxing"></span>
                </div>
            </div>

            <v-chart :options="polar" style="width: 100%;" />
              
        </div>

        <div class="introduce">
          <v-chart :options="polar" style="width: 100%;" />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';

import 'echarts/lib/component/polar';
import 'echarts/lib/component/title.js';

export default {
    computed: {},
    components: {
        NavBar,
        'v-chart': ECharts
    },
    data() {
        let data = [];

        for (let i = 0; i <= 360; i++) {
            let t = (i / 180) * Math.PI;
            let r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        return {
            polar: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        // dataView: { show: true, readOnly: false },
                        // magicType: { show: true, type: ['line', 'bar'] },
                        // restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['分数', '班级平均分', '年级平均分', '班级最高分'],
                    bottom: '0'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['语文', '数学', '英语', '历史', '地理', '生物', '化学'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '水量',
                        min: 0,
                        max: 150,
                        interval: 50
                    }
                ],
                series: [
                    {
                        name: '分数',
                        type: 'bar',
                        data: [70, 80, 60, 40, 50, 34, 66]
                    },
                    {
                        name: '班级平均分',
                        type: 'bar',
                        data: [76, 120, 92, 65, 57, 63, 74]
                    },
                    {
                        name: '年级平均分',
                        type: 'line',
                        data: [75, 110, 90, 63, 59, 60, 78]
                    },
                    {
                        name: '班级最高分',
                        type: 'line',
                        data: [80, 150, 140, 70, 80, 85, 99]
                    }
                ]
            }
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.inputBox {
    display: flex;
    margin: 20px 20px 40px;
    height: 70px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    border-radius: 8px;
    align-items: center;

    input {
        padding-left: 20px;
        flex: 1;
        border: none;
    }

    .iconsousuo {
        width: 100px;
        text-align: center;
        font-size: 38px;
        color: #929292;
    }
}

.info {
    background-color: #fff;
    padding: 20px;
    color: #000;
    label {
        margin-right: 30px;
    }
}
.echartsBox {
    margin: 20px 0;
    background-color: #fff;
    padding: 20px 0;
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
        min-width: 200px;
        margin: 0 15px;
        padding: 0 20px;
        font-size: 28px;
        background-color: #ffffff;
        color: #000;
        display: flex;
        justify-content: space-between;
        .iconsanjiaoxing {
            font-size: 20px;
            color: #858585;
        }
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
