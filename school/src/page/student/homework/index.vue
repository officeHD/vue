<template>
    <div class="">
        <NavBar title="课后作业"><router-link class="link" to="/homeworkHistory">查看更多</router-link></NavBar>
        <div class="introduce">
            <p class="info">
                <label>姓名：张萌</label>
                <label>班级：三年级三班</label>
            </p>
            <p class="time">今天</p>
            <div class="list">
                <router-link class="item" to="homeworkDetail" v-for="i in 7" :key="i">
                    <div class="title">
                        <span>标题</span>
                        <span class="fj">查看附件</span>
                    </div>
                    <div class="content">
                        <label>作业内容：</label>
                        奥术大师大所大所奥术大师大所大所奥术大师大所大所奥术大师大所大所
                    </div>
                    <div class="compTime">
                        <label>完成日期：</label>
                         2018-10-20
                    </div>
                </router-link>
            </div>
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
    
    .link {
        color: #1fa2fd;
        font-size: 28px;
    }
.introduce {
    .info {
        background-color: #fff;
        padding: 20px;
        color: #000;
        label{
            min-width: 200px;
            display: inline-block;
            font-size: 28px;
        }
    }
    .time {
        padding: 10px 20px;
        color: #666;
    }
    .list {
        background-color: #fff;
        padding: 0 20px;
        .item {
            display: block;
            padding: 20px 0;
            border-bottom: 1px solid #e6e6e6;
            &:last-child {
                border-bottom: none;
            }
            .title {
                display: flex;
                justify-content: space-between;
                font-size: 32px;
                color: #000;
                padding-top: 10px;
                padding-bottom: 20px;
                .fj {
                    color: #1fa2fd;
                    font-size: 26px;
                }
            }
            .content,
            .compTime {
                width: 100%;
                font-size: 28px;
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin: 3px 0;
                label {
                    color: #000;
                }
            }
        }
    }
}
</style>
