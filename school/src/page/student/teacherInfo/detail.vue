<template>
    <div class="">
        <NavBar title="教师风采" />
        <div class="introduce">
            <img :src="require('@/images/banner2.png')" />
            <p class="name_user">姓名</p>
            <div class="detail">
                <p class="main">主要荣誉</p>
                <p>主要荣誉主要荣誉主要荣誉主要荣誉主要荣誉主要荣誉主要荣誉</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
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
    margin-top: 20px;
    background-color: #ffffff;
    padding: 20px;
    .name_user {
        height: 60px;
        position: relative;
        top: -60px;
        line-height: 60px;
        background: rgba(0, 0, 0, 0.2);
        color: #f4f4f4;
        text-align: center;
        font-size: 28px;
        letter-spacing: 2px;
    }
    .detail {
        p {
            text-indent: 2em;
            font-size: 28px;
            margin-bottom: 10px;
        }
        .main {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 20px;
        }
    }
}
</style>
