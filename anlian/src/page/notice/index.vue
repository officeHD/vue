<template>
	<div class="wrapper">
        <div class="top">
        <div class="navtop"></div>
        <div class="nav">
            <div class="navLeft"><img src="../../images/left-circle.png" @click="prev"></div>
            <div class="navMid">复星联合康乐一生</div>
            <div class="navRight"></div>
        </div>
        </div>
        <div class="content">
            <div class="title">健康告知</div>
            <div class="contentIntro">
                <p>投保人应在对所有被保险人健康/职业状况 了解的基础上履行如实告知义务。投保人承诺完全知晓所有被保险人健康/职业状况。</p>
                <p>若被保险人健康/职业状况与下述告知内容不符:</br>
                    (1)本公司有权不同意承保。</br>
                    (2)若发生保险事故,本公司不承担赔偿或给付保险金的责任,并有权不退还保险费</p>
                <ul class="conUl">
                    <li v-for="item in noticeList" :key="item.id">{{ item.content }}</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="leftBtn">部分是</div>
            <router-link to="/insured" class="leftBtn">否，继续投保</router-link>
        </div>
	</div>
</template>

<script>



	export default {
		// props:['methods'],
		components: {
			
		},
		data() {
			return {
                noticeList:[
                    {id:"1",content:" 1.被保险人现时是否正进行任何健康咨询、药物治疗、外科手术,但不包括普通感冒、流感或敏感症;或考虑在短期内寻求诊疗、检查、测试、住院治疗或外科手术??此处所述住院医疗或手术不包括阑尾炎，脂肪瘤，肺炎，上呼吸道感染，骨折，颈椎疾病，急性胃炎或非萎缩性胃炎、上消化道出血，顺产手术、胆囊炎。"},
                    {id:"2",content:"2.您是否抽烟超过15支/2.被保险人最近5年中,在申请如人寿保险、意外伤害保险,重大疾病保险、其它医疗健康保险等任何保险计划时,是否曾被延迟、被拒保、被撤销或被附加任何特别条件(如增加保险费或特别免责条款)?"},
                    {id:"3",content:"3.被保险人是否曾经或正患有如下任一疾病、出现如下任一体征或检查异常、或接受如下任一治疗(相关定义以世界卫生组织颁布的《疾病和有关健康问题的国际统计分类 (ICD-10)》为准):-冠心病、心绞痛、心肌梗塞、心脏瓣膜疾病 各种原因导致的心脏衰竭、先天性心脏缺陷、冠状动脉介入手术或搭桥手术、动脉瘤或血管畸形、血友病、血液凝固障碍、脑卒中;-痴呆、癫痫、多发性硬化、帕金森病、阿尔茨海默病或任何影响脑部或神经系统的失常;-肝脏疾病或症状(如肝炎病毒携带者、肝硬化、肝功能衰竭等)、胃旁路手术、胃/十二指肠溃疡、炎症性肠病(如溃疡性结肠炎、克罗恩病(节段性肠炎)等)、胰腺炎、胆囊息肉、胆石症;-代谢综合症、各种类型糖尿病、高血压、肾上腺皮质功能不全、肢端肥大症、各种甲状腺疾病(如甲状腺结节、甲状腺功能亢进/降低等);-恶性肿瘤、白血病、淋巴瘤、良性肿瘤且未手术、不明性质的肿块/息肉/结节/新生物;-精神病、各种类型的抑郁症、自闭症、厌食症或暴食症、试图自杀;-耳疾(如耳聋等)、眼疾(如青光眼、白内障、视网膜出血或剥离等)、鼻部疾病或咽喉疾病(不包括普通感染);-肢体瘫痪(包括截瘫、偏瘫或全瘫)、类风湿性关节炎、强直性脊柱炎、系统性红斑狼疮、肌营养不良、股骨头坏死、椎间盘突出症、人工关节置换等其他与骨骼、脊椎骨或肌肉相关的疾病或症状;-肾小球(肾盂)疾病、肾病综合症、慢性肾功能衰竭、肾透析、多囊肾;-肺气肿、慢性阻塞性肺病、肺纤维化、间质性肺病、哮喘;-各种器官移植,如心、肺、肝、肾、胰脏、造血干细胞移植等;"},
                    {id:"4",content:"4.您是否在投保或4.被保险人最近2年中,是否做过以下任意一项检查,且任意一项检查结果有异常- X 光、B 超、彩超、 CT 、核磁共振、内窥镜、病理活检、眼底检查、血液检查；复效时被拒绝、延期、加费或除外责任承保?"},
                    {id:"5",content:"5.您是否参与任何危险的运动或赛事(如5.被保险人最近1年中,是否有因病连续住院5天及以上,或病假累计15天及以上(不包括剖腹产或顺产)?赛车’登山、攀岩、滑雪、潜水、跳伞、蹦极’驾驶航空机具以及其他危险运动或赛事)?"},
                    {id:"6",content:"6.被保险人最近1年,是否有如下 不适症状:反复头晕、晕厥、胸痛、气急、紫6.被保险人最近1年,是否有如下 不适症状:反复头晕、晕厥、胸痛、气急、紫绀、持续反复发热、抽搐、不明原因皮下出血点、咯血 反复呕吐、进食哽噎感或吞咽困难、呕血、浮肿、腹痛、黄疸(新生儿黄疸 已治愈的除外)、反复淋巴结肿大、贫血(血红蛋白低于90g/ L )、便血或黑便、血尿、蛋白尿、肿块(乳腺小叶增生除外)、阴道不规则出血(女性适用)、体重下降或上升超过5公斤?绀、持"},
                    {id:"7",content:"7.被保险人是否有:艾滋病毒感染史、酗酒史、滥用药物史(酗酒是指每周饮酒单位大于等于50,每一个饮酒单位含12g酒精,相当于1杯(300m[)啤酒或者半杯(150m[)葡萄酒或者45ml白酒)?"},
                    {id:"8",content:"8.2周岁以下被保险人是否存在以下情况:出生时体重低于2.5公斤,早产、窒息、发育迟缓、脑瘫?"},
                    {id:"9",content:"9.被保险人是否曾经或正患有先天性或遗传相关因素疾病,被保险人父母,兄弟姐妹中是否有2人或以上在60周岁及以前因病去世?"},
                    {id:"10",content:"10.18周岁以上(含18周岁)成年女性被保险人,是否曾经或正患有重度宫颈上皮内瘤样病变(重度异型增生)?"},
                    {id:"11",content:"11.被保险人是否从事潜水、滑水、滑雪、赛车、攀岩、登山、跳伞等危险运动?"},
                    {id:"12",content:"12.被保险人是否以非缴费乘客身份参与航空或飞"},
                    ]
			};
		},

		created: function() {
		
		},
		methods: {
            prev(){
                this.$router.go(-1);
            }
    },
}
</script>

<style scoped lang="less">
.top{
    width: 100%;
    position: fixed;
    top: 0;
}
.navtop{
    width: 100%;
    height: 36px;
    background: #fff;
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
    .content{
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 116px;
        margin-left: 5%;
        margin-bottom: 100px;
        .title{
            width: 100%;
            text-align: center;
            padding: 24px 0;
            font-size: 28px;
            color: #333;
            margin-top: 20px;
        }
        p{
            padding: 20px 0;
            margin: 0 0;
            font-size: 24px;
            color: #333;
            line-height: 45px;
        }
        .conUl{
            margin-top: 20px;
        }
        li{
            font-size: 24px;
            color: #333;
            margin-bottom: 42px;
        }
    }
.bottom{
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    .leftBtn{
        border: #da251e solid 2px;
        border-radius: 5px;
        width: 275px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #da251e;
        margin-right: 15px;
        font-size: 26px;
        vertical-align: middle;
    }
    .leftBtn:hover{
        background: #da251e;
        color: #fff;
    }
}
</style>
