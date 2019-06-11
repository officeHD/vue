<template>
    <div class="">
        <NavBar title="历史信息"><span class="link">筛选</span></NavBar>
        <div class="introduce">
            <div class="list">
                <router-link  class="item" v-for="i in 7" :key="i" to="homeworkDetail">
                    <div class="title">
                        <span>热销</span>
                        <span>热销热销</span>
                         阿斯顿发生大所大所大所大所大所大所多 
                    </div>
                    <p>
                        <img :src="require('@/images/teacher.png')" />
                        <label>阿达的</label>
                        <label>2016-01-15</label>
                    </p>
                </router-link >
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
.introduce {
    background-color: #fff;
    margin-top: 20px;
    padding: 0 20px;
    .list {
        padding:  0 20px;
        .item {
            padding: 20px 0;
            display: block;
            border-bottom: 1Px solid #e6e6e6;
            &:last-child{
                border-bottom: none;
            }
            .title{
                font-size: 30px;
                color: #000;
                margin-bottom: 10px;
                span{
                    background: #1fa2fd;
                    color: #fff;
                    padding: 2px 8px;
                    font-size: 24px;
                    border-radius: 2Px;
                    margin-right: 10px;
                }
            }
            p {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                    border-radius: 50%;
                }
                label{
                    margin-right: 10px;
                    color: #666;
                }
            }
        }
    }
}

.link {
    color: #1fa2fd;
    font-size: 28px;
}
</style>
