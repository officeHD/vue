<template>
    <div class="insuPlan">
        <div v-if="varitayCode=='common'">
        <ul class="tab-tilte" >
            <li @click="cur = 0" :class="{ active: cur == 0 }">计划一</li>
            <li @click="cur = 1" :class="{ active: cur == 1 }">计划二</li>
        </ul>
         
        <div class="tab-content">
            <div class="tabItem" v-show="cur == 0">
                <ul>
                    <planItem v-for="item in items" :key="item.id" :data="item"/>
                </ul>
            </div>
            <div class="tabItem" v-show="cur == 1">
                <ul>
                    <planItem v-for="item in items2" :key="item.id" :data="item"/>
                </ul>
            </div>
        </div>
        <div class="betweenFlex calcFee">
            <label class="fee">￥<span class="money">728</span>起</label>
            <span class="calcBtn">保费试算</span>
        </div>
        </div>
        <div v-if="varitayCode=='woman'">
            <ul class="tab-tilte">
                <li @click="cur = 0" :class="{ active: cur == 0 }">经典版</li>
                <li @click="cur = 1" :class="{ active: cur == 1 }">尊贵版</li>
            </ul>
            <div class="tab-content">
                    <div class="tabItem" v-show="cur == 0">
                        <ul>
                            <planItem v-for="item in items" :key="item.id" :data="item"/>
                        </ul>
                    </div>
                    <div class="tabItem" v-show="cur == 1">
                        <ul>
                            <planItem v-for="item in items2" :key="item.id" :data="item"/>
                        </ul>
                    </div>
                </div>
        <div class="betweenFlex calcFee">
            <label class="fee">￥<span class="money">500起</span>起</label>
            <span class="calcBtn">保费试算</span>
        </div>
        </div>
    </div>
</template>

<script>
import planItem from './planItem';
export default {
    components: { planItem },
    mounted(){
         this.varitayCode=sessionStorage.getItem("varitayCode");
        //  this.common=sessionStorage.getItem("key2");
    },
    data() {
        return {
            // woman:null,
            varitayCode:null,
            cur: 0 ,//默认选中第一个tab
            items:[{
                title:"意外身故及伤残",
                name:"20万",
                content:"在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起180日内因该事故身故的，保险人按保险金额给付身故保险金，对该被保险人的保险责任终止。被保险人因遭受意外伤害事故且自该事故发生日起下落不明，后经人民法院依法宣告死亡的，保险人按保险金额给付身故保险金。但若被保险人被宣告死亡后生还的， 保险金受领人应于知道或应当知道被保险人生还后30日内退还保险人给付的身故保险金。 被保险人身故前已领有伤残保险金的，身故保险金为扣除已给付保险金后的余额（如有）。",
            },{
                title:"疾病住院医疗(0免赔)",
                name:"2万",
                content:"若被保险人自本附加条款生效之日起30日后（续保无30日规定），首次罹患疾病，经中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院或保险人认可的医疗机构诊断必须住院治疗的，保险人对于被保险人需个人支付的、必要且合理的住院医疗费用，在扣除约定免赔额后，依照约定的比例补偿住院医疗费用。",
            },{
                title:"意外医疗(0免赔)",
                name:"2万",
                content:"在保险期间内，若被保险人遭受主合同所约定的意外伤害，并在意外事故发生之日起180日内在中华人民共和国境内（不包括港、澳、台地区）的二级以上（含二级）医院，或保险人认可的医疗机构进行治疗，保险人按下列约定给付意外医疗保险金： 1） 中华人民共和国境内（不包括港、澳、台地区）：对于被保险人在每次意外伤害中所支出的必要且合理的实际医疗费用，保险人在扣除社会基本医疗保险或任何第三方（包括任何商业医疗保险）已经补偿或给付部分后，按保险单所载明的免赔额及赔付比例给付意外医疗保险金。 2） 中华人民共和国境外：对于被保险人在事故发生地所在国家或地区的医疗机构进行治疗所支出的必要且合理的实际医疗费用，扣除任何第三方（包括任何商业医疗保险）已经补偿或给付部分后，按保险单所载明的免赔额及赔付比例给付意外医疗保险金。",
            }],
            items2:[{
                title:"意外身故及伤残",
                name:"200000",
                content:"在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起180日内因该事故身故的，保险人按保险金额给付身故保险金，对该被保险人的保险责任终止。被保险人因遭受意外伤害事故且自该事故发生日起下落不明，后经人民法院依法宣告死亡的，保险人按保险金额给付身故保险金。但若被保险人被宣告死亡后生还的， 保险金受领人应于知道或应当知道被保险人生还后30日内退还保险人给付的身故保险金。 被保险人身故前已领有伤残保险金的，身故保险金为扣除已给付保险金后的余额（如有）。",
            },{
                title:"疾病住院医疗(0免赔)",
                name:"20000",
                content:"若被保险人自本附加条款生效之日起30日后（续保无30日规定），首次罹患疾病，经中华人民共和国境内（不包括港、澳、台地区）二级以上（含二级）医院或保险人认可的医疗机构诊断必须住院治疗的，保险人对于被保险人需个人支付的、必要且合理的住院医疗费用，在扣除约定免赔额后，依照约定的比例补偿住院医疗费用。",
            },{
                title:"意外医疗(0免赔)",
                name:"20000",
                content:"在保险期间内，若被保险人遭受主合同所约定的意外伤害，并在意外事故发生之日起180日内在中华人民共和国境内（不包括港、澳、台地区）的二级以上（含二级）医院，或保险人认可的医疗机构进行治疗，保险人按下列约定给付意外医疗保险金： 1） 中华人民共和国境内（不包括港、澳、台地区）：对于被保险人在每次意外伤害中所支出的必要且合理的实际医疗费用，保险人在扣除社会基本医疗保险或任何第三方（包括任何商业医疗保险）已经补偿或给付部分后，按保险单所载明的免赔额及赔付比例给付意外医疗保险金。 2） 中华人民共和国境外：对于被保险人在事故发生地所在国家或地区的医疗机构进行治疗所支出的必要且合理的实际医疗费用，扣除任何第三方（包括任何商业医疗保险）已经补偿或给付部分后，按保险单所载明的免赔额及赔付比例给付意外医疗保险金。",
            }]
        };
    },
    created() {}
};
</script>

<style lang="less" scoped>
ul li {
    margin: 0;
    padding: 0;
    list-style: none;
}
.insuPlan {
    width: 95%;
    margin: 0 auto;
}

.tab-tilte {
    width: 100%;
    display: flex;
    align-items: flex-end;
}
.tab-tilte li {
    flex: 1;

    text-align: center;

    cursor: pointer;
    background-color: #dfdfdf;
    height: 80px;
    line-height: 80px;
    font-size: 32px;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
    background-color: #fff;
    color: #da2420;
    height: 93px;
    line-height: 93px;
    box-shadow: 0px -5px 10px -5px #333333;
}
.tab-content {
    background-color: #fff;
    .tabItem {
        width: 100%;
    }
}
.calcFee{
    background-color: #ffffff;
    height: 98px;
    padding: 0 20px;
}
.fee{
     color: #da2420;
     font-size: 28px;
}
.money{
    font-weight: 600;
    font-size: 44px;
}
.calcBtn{
    border: 1Px solid #da2420;
    color: #da2420;
    padding:8px 25px;
    display: inline-block;
    border-radius: 25px;
}
</style>
