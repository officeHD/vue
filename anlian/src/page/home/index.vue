<template>
    <div class="home_container">
         <div v-if="varitayCode=='common'">
            <div class="nav">
                <div class="navLeft"><img src="../../images/left-circle.png"></div>
                <div class="navMid">安联住院保</div>
                <div class="navRight"></div>
            </div>
        </div>
        <div v-if="varitayCode=='woman'">
            <div class="nav">
                <div class="navLeft"><img src="../../images/left-circle.png"></div>
                <div class="navMid">安联女性百万意外险</div>
                <div class="navRight"></div>
            </div>
        </div>
        <div v-if="varitayCode=='common'">
        <img class="bannerImg" src="../../images/banner01.jpg" />
        </div>
        <div v-if="varitayCode=='woman'">
        <img class="bannerImg" src="../../images/banner02.jpg" />
        </div>
        <div class="introduce">
            <span class="fz24">该产品由京东安联财产保险有限公司承保并理赔</span>
            <img class="logoImg" src="../../images/logo.png" />
        </div>
        <insuPlan/>
        <detailPlan/>
    </div>
</template>

<script>
import insuPlan from '../../components/insuPlan';
import detailPlan from '../../components/detailPlan';

export default {
    name: 'home',
    components: {
        insuPlan,
        detailPlan,
    
    },
    created() {},
    mounted(){
        this.varitayCode=sessionStorage.getItem("varitayCode");
        // this.common=sessionStorage.getItem("key2");
    },
     data(){
         return{
        varitayCode:null,
        }
        }
};
</script>

<style lang="less" scoped>
.home_container {
}
.nav{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    // position: fixed;
    // top: 0;
    .navLeft{
        width: 50px;
        height:50px;
    }
    .navMid{
        
        width: 335px;
        height: 80px;
        line-height: 80px;
        color: #333;
        font-size: 32px;
        text-align: center;
    }
    .navRight{
        width: 50px;
        height: 50px;
    }
}
.bannerImg {
    width: 100%;
    display: block;
}
.introduce {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
    align-items: center;
    margin-bottom: 20px;
    .logoImg {
        width: 103px;
    }
}
.fz24 {
    font-size: 28px;
    color: #999;
}
</style>
