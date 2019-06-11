<template>
    <div class="">
        <NavBar title="查询"><router-link class="link" to="/healthList">切换</router-link></NavBar>
        <p class="info">
            <label>姓名：</label>
            <label>日期：2019-02-10</label>
             
        </p>
        <div class="introduce">
            <div class="searchBox">
                <div class="select">
                    本学期
                    <span class="iconfont iconsanjiaoxing"></span>
                </div>
            </div>
            <table>
                <thead>
                    <tr class="primary">
                        <th>姓名</th>
                        <th>上次</th>
                        <th>本次</th>
                        <th>名次</th>
                        <th>升降</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 5" :key="i">
                        <td>得分</td>
                        <td>20</td>
                        <td>30</td>
                        <td>60</td>
                        <td>10</td>
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
   label{
       margin-right: 30px;
   }
}

.searchBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .select {
        height: 70px;
        line-height: 70px;
        border: 1Px solid #e9e9e9;
        border-radius: 5px;
        min-width: 200px;
 
        padding: 0 20px;
        font-size: 28px;
        background-color: #ffffff;
        color: #000;
        display: flex;
        justify-content: space-between;
        .iconsanjiaoxing {
            font-size: 10px;
            color: #858585;
        }
    }
    
}

.introduce {
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
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
            height: 80px;
        }
        td{
            height: 110px;
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
