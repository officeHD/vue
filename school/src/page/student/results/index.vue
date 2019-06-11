<template>
    <div class="">
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
        <div class="introduce">
            <div class="title">
                查看科目
                <router-link to="/resultSub" class="link">更多</router-link>
            </div>
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
            <div class="title">
                年级统考
                <span class="link"></span>
            </div>
            <div class="total">
                <p class="fenshu">总分：750</p>
                <p class="time">2018-2-12</p>
                <router-link  to="resultTotal"  class="link">查看更多</router-link>
            </div>
            <div class="list">
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                <div class="item"> <span class="item_title">150</span><span>姓名</span> </div>
                 
              
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';
import {cjlist} from '@/config/api';

export default {
    computed: {},
    components: {
        NavBar,
        BlankLi
    },
    created(){
        cjlist(res=>{
            console.log(res)
        })
    },
    methods: {}
};
</script>

<style lang="less" scoped>
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

.introduce {
    background-color: #fff;
    margin-top: 20px;
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
            &:last-child{
                td{
                    border-bottom: none;
                }
            }
        }
    }
    .total{
        text-align: center;
        padding: 20px 0;
        .fenshu{
            font-size: 34px;
            color: #000;
            font-weight: 600;
        }
        .time{
            margin-bottom: 10px;
        }
         border-bottom: 1px solid #e6e6e6;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px ;
        .item{
            border-right: 1Px solid #e6e6e6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 33.333%;
            margin: 20px 0;
            font-size: 24px;
            color: #999;
            &:nth-child(3n){
                border-right:none; 
            }
            .item_title{
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
