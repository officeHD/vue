<template>
    <div class="">
        <NavBar title="考勤筛选"></NavBar>
        <p class="info">
            <label>姓名：</label>
            <label>姓名：</label>
        </p>
        <div class="filter">
            <BlankLi title="工号">33333</BlankLi>
            <BlankLi title="教师">33333</BlankLi>
            <BlankLi title="学校">33333</BlankLi>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import BlankLi from '@/components/BlankLi';
import MonthDay from '@/components/MonthDay';

export default {
    computed: {},
    components: {
        NavBar,
        BlankLi,
        MonthDay
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="less" scoped>
    .filter{
        padding:  0 20px;
        background: #fff;
        margin-top: 20px;
    }
.info {
    background-color: #fff;
    padding: 20px;
    color: #000;
    display: flex;
    justify-content: space-between;
    label {
        width: 100%;
    }
}
</style>
