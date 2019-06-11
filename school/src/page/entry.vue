<template>
    <div>
        <div v-if="userType == '0'">
            <button @click="changeUserType('1')">我是老师</button>
            <button @click="changeUserType('2')">我是学生</button>
        </div>
        <div v-else class="btnArea">
            <router-link class="btnDefault" to="new">资讯中心</router-link>
            <router-link class="btnPrimary" to="main">消息</router-link>
            <router-link class="btnDefault" to="acBind">账户绑定</router-link>
            <router-link class="btnPrimary" to="acManage">账号管理</router-link>
            <router-link class="btnDefault" to="acManage">常见问题</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState({
            userType: state => state.userType
        })
    },
    components: {},
    methods: {
        ...mapActions(['changeUserType'])
    }
};
</script>

<style lang="less">
.btnArea {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    .btnPrimary,
    .btnDefault {
        height: 90px;
        position: relative;
        display: block;

        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 32px;
        text-align: center;
        text-decoration: none;
        line-height: 90px;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        width: 40%;
        border-width: 0;
        outline: 0;
        -webkit-appearance: none;
        margin: 20px;
    }
    .btnPrimary {
        color: #ffffff;
        background-color: #0090ed;
    }
    .btnDefault {
        background-color: #e6e6e6;
        color: #e5222a;
    }
}
</style>
