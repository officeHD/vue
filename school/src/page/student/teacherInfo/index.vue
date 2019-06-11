<template>
    <div class="">
        <NavBar title="教师风采" />
        <div class="introduce">
            <img :src="require('@/images/banner2.png')" />
            <h3>师资力量</h3>
            <router-link  to="/teacherList">点击查看详情>></router-link>
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
    padding: 20px;
    margin-top: 20px;
    background-color: #ffffff;
    img {
        margin-bottom: 15px;
    }
    p {
        line-height: 1.4;
        font-size: 28px;
        text-indent: 2em;
        margin-bottom: 10px;
    }
}
</style>
