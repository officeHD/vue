<template>
    <div>
        <div id="fixedHeaderRoot">
            <div class="betweenFlex isFixed" v-show="headerFixed">
                <div class="liItem" :class="[acriveItem == 'section1' ? 'acriveItem' : '']"><span>投保须知</span></div>
                <div class="liItem" :class="[acriveItem == 'section2' ? 'acriveItem' : '']"><span>产品介绍</span></div>
                <div class="liItem" :class="[acriveItem == 'section3' ? 'acriveItem' : '']"><span>快速理赔</span></div>
                <div class="liItem" :class="[acriveItem == 'section4' ? 'acriveItem' : '']"><span>常见问题</span></div>
            </div>
        </div>
        <section id="section1">
            <div class="title"><h3>投保须知</h3></div>
            <ul class="content">
                <li class="betweenFlex">
                    <span>投保年龄</span>
                    <span>60天-65周岁</span>
                </li>
                <li class="betweenFlex">
                    <span>保障期限</span>
                    <span>1年</span>
                </li>
                <li class="betweenFlex">
                    <span>职业类别</span>
                    <span>1-4类</span>
                </li>
                <li class="betweenFlex">
                    <span>可购份数</span>
                    <span>每名保险人限1份</span>
                </li>
            </ul>
            <p>
                查看
                <span>《个人意外伤害保险条款》</span>
                、
                <span>《投保须知》</span>
                、
                <span>《职业分类表》</span>
                和
                <span>《免除责任》</span>
            </p>
        </section>
        <section id="section2">
            <div class="title"><h3>产品介绍</h3></div>
            <div class="proImg"><img src="../images/woman_pro.png"></div>
            <div>
                <div><img src="../images/compare.jpg"></div>

            
            </div>
        </section>
        <section id="section3">
            <div class="title"><h3>快速理赔</h3></div>
            <div class="s3content">
                <ul>
                    <li>
                        <div class="s3left"><i data-v-19455e20="" class="iconfont  icon icon-arrows_down"></i></div>
                        <div class="s3right">
                            <p class="s3title">1、报案</p>
                            <p class="s3main">拨打安联财险客服热线：<span class="mainPhone">400-800-2020  </span>或者发送邮件Claims@anlian.cn进行报案</p>
                        </div>
                    </li>
                    <li>
                        <div class="s3left"><i data-v-19455e20="" class="iconfont  icon icon-arrows_down"></i></div>
                        <div class="s3right">
                            <p class="s3title">2、准备材料</p>
                            <p class="s3main">根据客服指引收集好所有理赔所需资料</p>
                        </div>
                    </li>
                    <li>
                        <div class="s3left"><i data-v-19455e20="" class="iconfont  icon icon-arrows_down"></i></div>
                        <div class="s3right">
                            <p class="s3title">3、保险公司核准</p>
                            <p class="s3main">根据客服指引准备好所有的理赔所需的资料</p>
                        </div>
                    </li>
                    <li>
                        <div class="s3left"><i data-v-19455e20="" class="iconfont  icon icon-arrows_down"></i></div>
                        <div class="s3right">
                            <p class="s3title">4、领取理赔金</p>
                            <p class="s3main">保险公司告知理赔决定，保险金将通过转账的方式支付至客户指定账户</p>
                        </div>
                    </li>
                    <li>
                        <div class="s3left"><i data-v-19455e20="" class="iconfont  icon icon-arrows_down"></i></div>
                        <div class="s3right">
                            <p class="s3title">5、理赔查询</p>
                            <p class="s3main">理赔查询地址：http://wwww.allianz.cn</p>
                        </div>
                    </li>
                </ul>
            </div>
             <p class="check">
                查看<span>《住院保索赔指南》</span>、<span>《索赔申请书》</span>
            </p>
        </section>
        <section id="section4">
            <div class="title"><h3>常见问题</h3></div>
            <div class="s4content">
                <ul>
                    <li>
                        <p class="question">Q :   本产品是否有呼待期?</p>
                        <p class="answer">A :    本产品意外身故/伤残和意外意外医疗没有等待期，被保险人首次投保或者非连续投保时，疾病住院保障等待期为30天。扁桃服、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天。</p>
                    </li>
                    <li>
                        <p class="question">Q :   如果需要住院治疗，就诊医院是否有要求?</p>
                        <p class="answer">A :    中户人民共和国境内(港、奥、台地区除外)合法经营的二级及二级以上公立医院，北京市平谷区、密云县、怀柔区所有医院除外，且不包括特需医疗、外宾/干部/联合病房、国际医疗中心、VIP部、联合医院。</p>
                    </li>
                </ul>
                <div class="more"><span class="moreDe">查看更多<i data-v-19455e20="" class="iconfont  icon icon-arrows_down font"></i></span></div>
            </div>
        </section>
        <div class="bottom">
            <div class="bottomLeft"><label class="label">￥<span class="money">166</span></label>元起</div>
            <div class="bottomRight">立即投保</div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // handleScroll为页面滚动的监听回调
        window.addEventListener('scroll', this.handleScroll);
        // 这里fixedHeaderRoot是吸顶元素的ID
        let header = document.getElementById('fixedHeaderRoot');
        // 这里要得到top的距离和元素自身的高度
        let section1 = document.getElementById('section1');
        let section2 = document.getElementById('section2');
        let section3 = document.getElementById('section3');
        let section4 = document.getElementById('section4');
        this.offsetTop = header.offsetTop;
        this.offsetHeight = header.offsetHeight;
        this.section1Top = section1.offsetTop;
        this.section2Top = section2.offsetTop;
        this.section3Top = section3.offsetTop;
        this.section4Top = section4.offsetTop;

        console.log('offsetTop:' + this.offsetTop + ',' + this.offsetHeight);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
    data() {
        return {
            headerFixed: '',
            acriveItem: ''
        };
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > this.section1Top && scrollTop < this.section2Top) {
                this.acriveItem = 'section1';
            } else if (scrollTop > this.section2Top && scrollTop < this.section3Top) {
                this.acriveItem = 'section2';
            } else if (scrollTop > this.section3Top && scrollTop < this.section4Top) {
                this.acriveItem = 'section3';
            } else if (scrollTop > this.section4Top) {
                this.acriveItem = 'section4';
            }
            // 判断页面滚动的距离是否大于吸顶元素的位置
            this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight * 2;
        }
    }
};
</script>

<style lang="less" scoped>
section {
    background-color: #fff;
    margin-top: 20px;
    .title {
        padding: 35px 0 30px;
        h3 {
            border-left: 5px solid #da2420;
            padding-left: 20px;
            font-weight: 500;
            color: #000;
            font-size: 32px;
        }
    }
    .content {
        padding: 0 20px;

        li {
            height: 60px;
        }
    }
    p {
        padding: 20px 0;
        margin: 20px 20px 0;
        border-top: 1px solid #ccc;
        font-size: 28px;
        span {
            color: #da2420;
        }
    }
}
.isFixed {
    background-color: #fff;
    z-index: 111;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    height: 100px;
    .liItem {
        height: 100px;
        line-height: 100px;
        flex: 1;
        text-align: center;
        &.acriveItem {
            color: #da2420;
            border-bottom: 3px solid #da2420;
        }
    }
}

.s3content{
    margin-top: 0px;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 112px;
        width: 750px;
        margin-bottom: 26px;
    }
    .s3left{
        border: #999 solid 1px;
        height: 80px;
        width: 80px;
        border-radius: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #1440AC;
    }
    .s3right{
        width: 591px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // align-items: center;
    }
    .s3title{
        color: #333;
        font-size: 32px;
        font-weight: bold;
        border: none;
        padding: 0 0;
        margin: 0 0;
    }
    .s3main{
        color: #999;
        font-size: 28px;
        border: none;
        padding: 5px 0;
        margin: 0 0;
    }
    .mainPhone{
        color: #1440AC;
    }
}
.check{
    padding: 20px 20px;
    border: none;
}
.s4content{
    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 20px;
        // align-items: center;
    }
    .question{
        border:none;
        padding:10px 20px;
        margin: 0 0;
        color: #333;
        font-size: 28px;
    }
    .answer{
        border: none;
        padding: 10px 20px;
        margin: 0 0;
        color: #999;
        font-size: 28px;
    }
    .more{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: #da2420;
        align-items: center;
        background-color: #fcfcfc;

    }
    .moreDe{
        padding: 20px  0;
        margin-bottom:100px;
    }
    .font{
        font-size: 32px;
        padding-left: 5px;
    }
}
.bottom{
    // border: red solid 1px;
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .bottomLeft{
        padding: 0 20px;
        color: #da2420;
        font-size: 28px;
    }
    .label{
        color: #da2420;
        font-size: 28px;
    }
    .money{
        font-size: 44px;
        color: #da2420;
        font-weight: 600;
    }
    .bottomRight{
        width: 266px;
        background: #da2420;
        color: #fff;
        text-align: center;
        height: 96px;
        line-height: 96px;
    }
}
</style>
