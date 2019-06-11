<template>
    <div class="">
        <NavBar title="历史检查"> </NavBar>
        <p class="info">
            <label>姓名：</label>
            <label>姓名：</label>
            <label>姓名：</label>
        </p>
        <p class="time">2019-02-10</p>
        <div class="introduce">
            <table>
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
         <p class="time">2019-02-10</p>
        <div class="introduce"> 
            <table>
                <thead>
                    <tr class="waring">
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
export default {
    computed: {},
    components: {
        NavBar
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.info {
    background-color: #fff;
    padding: 20px;
    color: #000;
    display: flex;
    justify-content: space-between;
}
.time {
    padding: 20px;
}
.introduce {
    background-color: #fff;
    padding: 20px;
     
    .title{
         padding: 20px 0;
         text-align: center;
         border-bottom: 1Px solid #e6e6e6;
          margin-bottom: 20px;
         h3{
             font-size: 32px;
             color: #000;
             margin-bottom: 10px;
         }
         p{
              font-size: 28px;
             color: #999;
         }
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        th {
            font-weight: normal;
        }
        th,
        td {
            text-align: center;
            padding: 20px 0;

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
        .waring{
             background-color: #EE9A28;
            color: #fff;
            border-radius: 5px;
        }
    }
    
    
}
.link {
    color: #1fa2fd;
    font-size: 28px;
}
</style>
