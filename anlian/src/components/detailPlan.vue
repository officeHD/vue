<template>
  <div>
    <div id="fixedHeaderRoot">
      <div class="betweenFlex isFixed" v-show="headerFixed">
        <div class="liItem" :class="[acriveItem == 'section1' ? 'acriveItem' : '']">
          <span>投保须知</span>
        </div>
        <div class="liItem" :class="[acriveItem == 'section2' ? 'acriveItem' : '']">
          <span>产品介绍</span>
        </div>
        <div class="liItem" :class="[acriveItem == 'section3' ? 'acriveItem' : '']">
          <span>快速理赔</span>
        </div>
        <div class="liItem" :class="[acriveItem == 'section4' ? 'acriveItem' : '']">
          <span>常见问题</span>
        </div>
      </div>
    </div>
    <section id="section1">
      <div class="title">
        <h3>投保须知</h3>
      </div>
      <ul class="content">
        <li class="betweenFlex" v-for="item in insureData.firstKnow" :key="item.id" :data="firstKnow">
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
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
      <div class="title">
        <h3>产品介绍</h3>
      </div>
      <div v-if="varitayCode=='common'">
        <div class="proImg">
          <img src="../images/product.jpg">
        </div>
        <div>
          <div>
            <img src="../images/compare.jpg">
          </div>
          <table>
            <thead>
              <tr>
                <th>安联住院宝</th>
                <th>某热销同类产品</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>不限社保用药</td>
                <td class="tdRight">非社保用药不可报销</td>
              </tr>
              <tr>
                <td>意外医疗0免赔额</td>
                <td class="tdRight">100免赔额</td>
              </tr>
              <tr>
                <td>住院医疗0免赔额</td>
                <td class="tdRight">500免赔额</td>
              </tr>
              <tr>
                <td>无社保80%报销</td>
                <td class="tdRight">无社保60%报销</td>
              </tr>
            </tbody>
          </table>

          <div>
            <img src="../images/interests.png">
          </div>
          <table>
            <thead>
              <tr>
                <th>保障利益</th>
                <th>计划一</th>
                <th>计划二</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>意外身故及伤残</td>
                <td>100000</td>
                <td>200000</td>
              </tr>
              <tr>
                <td>
                  疾病住院医疗
                  <p class="tap">(无免赔,赔付比例见投保须知)</p>
                </td>
                <td>100000</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>
                  意外医疗
                  <p class="tap">(无免赔,赔付比例见投保须知)</p>
                </td>
                <td>10000</td>
                <td>20000</td>
              </tr>
            </tbody>
          </table>
          <div>
            <img src="../images/free.png">
          </div>
          <table>
            <thead>
              <tr>
                <th>全年保费(周岁)</th>
                <th>计划一</th>
                <th>计划二</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-5</td>
                <td>546</td>
                <td>775</td>
              </tr>
              <tr>
                <td>6-17</td>
                <td>166</td>
                <td>243</td>
              </tr>
              <tr>
                <td>18-49</td>
                <td>229</td>
                <td>315</td>
              </tr>
              <tr>
                <td>50-65</td>
                <td>440</td>
                <td>625</td>
              </tr>
            </tbody>
          </table>
          <p class="extra">以上仅为一般性简介，详细内容请以正式签发的保险合同为准</p>
          <div class="message">
            <p class="mestitle">条款备案信息</p>
            <ul>
              <li>个人人身意外伤害保险条款(2016版)(备一普通意外保险)【2016】</li>
              <li>个人人身意外伤害保险条款(2016版)(备一普通意外保险)【2016】</li>
              <li>个人人身意外伤害保险条款(2016版)(备一普通意外保险)【2016】</li>
            </ul>
          </div>
        </div>
        <!-- 女性组件 -->
        <div v-if="varitayCode=='woman'">
          <div>
            <img src="../images/woman_pro.png">
          </div>
        </div>
      </div>
    </section>
    <section id="section3">
      <div class="title">
        <h3>快速理赔</h3>
      </div>
      <div class="s3content">
        <ul>
          <li>
            <div class="s3left">
              <i data-v-19455e20 class="iconfont icon icon-arrows_down"></i>
            </div>
            <div class="s3right">
              <p class="s3title">1、报案</p>
              <p class="s3main">
                拨打安联财险客服热线：
                <span class="mainPhone">400-800-2020</span>或者发送邮件Claims@anlian.cn进行报案
              </p>
            </div>
          </li>
          <li>
            <div class="s3left">
              <i data-v-19455e20 class="iconfont icon icon-arrows_down"></i>
            </div>
            <div class="s3right">
              <p class="s3title">2、准备材料</p>
              <p class="s3main">根据客服指引收集好所有理赔所需资料</p>
            </div>
          </li>
          <li>
            <div class="s3left">
              <i data-v-19455e20 class="iconfont icon icon-arrows_down"></i>
            </div>
            <div class="s3right">
              <p class="s3title">3、保险公司核准</p>
              <p class="s3main">根据客服指引准备好所有的理赔所需的资料</p>
            </div>
          </li>
          <li>
            <div class="s3left">
              <i data-v-19455e20 class="iconfont icon icon-arrows_down"></i>
            </div>
            <div class="s3right">
              <p class="s3title">4、领取理赔金</p>
              <p class="s3main">保险公司告知理赔决定，保险金将通过转账的方式支付至客户指定账户</p>
            </div>
          </li>
          <li>
            <div class="s3left">
              <i data-v-19455e20 class="iconfont icon icon-arrows_down"></i>
            </div>
            <div class="s3right">
              <p class="s3title">5、理赔查询</p>
              <p class="s3main">理赔查询地址：http://wwww.allianz.cn</p>
            </div>
          </li>
        </ul>
      </div>
      <p class="check">
        查看
        <span>《住院保索赔指南》</span>、
        <span>《索赔申请书》</span>
      </p>
    </section>
    <section id="section4">
      <div class="title">
        <h3>常见问题</h3>
      </div>
      <div class="s4content">
        <ul>
           <li v-for="item in showdetailList" :key="item.id" :data="problem">
            <p class="question">{{ item.question }}</p>
            <p class="answer">{{ item.answer }}</p>
          </li>
        </ul>
        <div class="more" v-if="insureData.problem.length>2" @click="changeFoldState">
          <span class="moreDe"> {{ brandFold? '查看更多':' '}}<i data-v-19455e20 class="iconfont icon icon-arrows_down font"></i></span>
        </div>
      </div>
    </section>
    
    <div v-if="typeCode=='longInsu'">
    <div class="bottom">
      <div class="bottomLeft">
        <img src="../images/share.png" class="bottomLeftPic">
        <router-link to="/poster" class="bottomLeftText">分享海报</router-link>
      </div>
      <div class="bottomLeft">
        <img src="../images/share.png" class="bottomLeftPic">
        <span class="bottomLeftText">制作计划书</span>
      </div>
      <div class="bottomRight" >
        <router-link to="/notice" class="toubao">立即投保</router-link>
        </div>
    </div>
    </div>
    <div v-if="typeCode=='shortInsu'">
    <div class="bottom">
      <div class="bottomLeft short">
        <img src="../images/share.png" class="bottomLeftPic">
        <router-link to="/poster" class="bottomLeftText">分享海报</router-link>
      </div>
     
      <div class="bottomRight" >
        <router-link to="/notice" class="toubao">立即投保</router-link>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
 import { allType,firstKnow,productImg,compensate,problem,insureData } from './data.js'

export default {
 
  created() {
    this.varitayCode = sessionStorage.varitayCode;
    this.typeCode = sessionStorage.typeCode;
    this.initDefaultData ();
  },
  mounted() {
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll);
    // 这里fixedHeaderRoot是吸顶元素的ID
    let header = document.getElementById("fixedHeaderRoot");
    // 这里要得到top的距离和元素自身的高度
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");
    let section4 = document.getElementById("section4");
    this.offsetTop = header.offsetTop;
    this.offsetHeight = header.offsetHeight;
    // this.section1Top = section1.offsetTop;
    // this.section2Top = section2.offsetTop;
    // this.section3Top = section3.offsetTop;
    // this.section4Top = section4.offsetTop;

    console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      headerFixed: "",
      acriveItem: "",
      varitayCode: "",
      typeCode:"",
      firstKnow:{},
      productImg:{},
      problem:{},
      brandFold: true,
    };
  },
    computed: {
     
    		showdetailList: {
    			get: function() {
    				if (this.brandFold) {
              // console.log(this.insureData.problem.length)
    					if (this.insureData.problem.length <3) {
    						return this.insureData.problem
    					}
    					let newArr = []
    					for (var i = 0; i < 2; i++) {
                let item = this.insureData.problem[i]
                newArr.push(item)
    					}
    					return newArr
    				}
    				return this.insureData.problem
    			},
    			set: function(val) {
    				this.showdetailList = val
    			}
    		}
    	},

  methods: {
     initDefaultData () {
       this.insureData=insureData.find((item)=>item.varitayCode==this.varitayCode);
       console.log(this.insureData);
       console.log(firstKnow)
                this.firstKnow =  firstKnow;
                this.productImg =productImg;
                this.problem =problem;
                
     },
    handleScroll() {
      this.section1Top = section1.offsetTop;
      this.section2Top = section2.offsetTop;
      this.section3Top = section3.offsetTop;
      this.section4Top = section4.offsetTop;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > this.section1Top && scrollTop < this.section2Top) {
        this.acriveItem = "section1";
      } else if (scrollTop > this.section2Top && scrollTop < this.section3Top) {
        this.acriveItem = "section2";
      } else if (scrollTop > this.section3Top && scrollTop < this.section4Top) {
        this.acriveItem = "section3";
      } else if (scrollTop > this.section4Top) {
        this.acriveItem = "section4";
      }
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight * 2;
    },
    changeFoldState() {
        this.brandFold = !this.brandFold
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
    font-size: 24px;
    span {
      color: #da2420;
    // font-size: 28px;
    font-size: 24px;

    }
  }
}
table {
  width: 85%;
  margin: 0 auto;
  margin-bottom: 33px;
  th {
    background-color: #65aeec;
    color: #fff;
    padding: 10px 0;
  }
  tbody {
    tr {
      background-color: #e9f3fb;
      &:nth-child(2n + 1) {
        background-color: #fff;
        td {
          padding: 15px 0;
        }
      }
    }
  }

  td {
    text-align: center;
    color: #65aeec;
    padding: 10px 0;
    color: #1440ac;
  }
  .tap {
    padding: 0 0;
    margin: 0 0;
    border: none;
    font-size: 18px;
    text-align: center;
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
.tdRight {
  color: #af8bbb;
}
.extra {
  color: #af8bbb;
  font-size: 10px;
  border: none;
  margin-left: 50px;
}
.message {
  .mestitle {
    text-align: center;
    padding: 20px 0;
    font-size: 18px;
    color: #1440ac;
    border: none;
  }
  li {
    color: #1440ac;
    padding: 20px 0;
    font-size: 10px;
    margin: 0 50px;
  }
}
.s3content {
  margin-top: 0px;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 112px;
    width: 750px;
    margin-bottom: 26px;
  }
  .s3left {
    border: #999 solid 1px;
    height: 80px;
    width: 80px;
    border-radius: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #1440ac;
  }
  .s3right {
    width: 591px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
  }
  .s3title {
    color: #333;
    font-size: 28px;
    font-weight: bold;
    border: none;
    padding: 0 0;
    margin: 0 0;
  }
  .s3main {
    color: #666;
    font-size: 24px;
    border: none;
    padding: 5px 0;
    margin: 0 0;
  }
  .mainPhone {
    color: #1440ac;
  }
}
.check {
  padding: 20px 20px;
  border: none;
}
.s4content {
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 20px;
    // align-items: center;
  }
  .question {
    border: none;
    padding: 10px 20px;
    margin: 0 0;
    color: #333;
    font-size: 26px;
  }
  .answer {
    border: none;
    padding: 10px 20px;
    margin: 0 0;
    color: #666;
    font-size: 24px;
  }
  .more {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #da2420;
    align-items: center;
    background-color: #fcfcfc;
  }
  .moreDe {
    padding: 20px 0;
    margin-bottom: 100px;
  }
  .font {
    font-size: 32px;
    padding-left: 5px;
  }
}
.bottom {
  border-top: #666 solid 1px;
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .bottomLeft {
    
    padding: 0 20px;
    color: #da2420;
    font-size: 28px;
    height: 96px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .bottomLeftPic{
    width: 45px;
    height: 45px;
    display: block;
  }
  .bottomLeftText{
    color: #666;
    font-size: 24px;
    text-align: center;
  }
  .bottomRight {
    width: 266px;
    background: #da2420;
    color: #fff;
    text-align: center;
    height: 96px;
    line-height: 96px;
    margin-top: 4px;
  }
  .toubao{
    color: #fff;
    text-align: center;
    line-height: 96px;
  }
  .short{
    width: 266px;
    margin-left: 70px;
  }
}
</style>
