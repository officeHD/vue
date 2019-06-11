<template>
    <div class="">
        <NavBar title="绑定学生"><router-link class="link" to="/accountAdd">添加</router-link></NavBar>
        <p class="time">当前账号</p>
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
.time {
    padding: 20px;
}
.userCard {
    display: flex;
    background: #ffffff;
    margin-bottom: 20px;
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
    padding: 20px;
    margin-bottom: 20px;
    .title {
        padding: 20px 0;
        text-align: center;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
        h3 {
            font-size: 32px;
            color: #000;
            margin-bottom: 10px;
        }
        p {
            font-size: 28px;
            color: #999;
        }
    }
}
.link {
    color: #1fa2fd;
    font-size: 28px;
}
</style>
