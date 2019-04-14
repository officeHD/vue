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
        <li class="betweenFlex fn28" v-for="item in insureDatas.firstKnow" :key="item.id"  >
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
      <p v-if="insureDatas.termsList.length>0">
        查看 <label v-for="item in insureDatas.termsList" :key="item.id"><span>{{item.name}}</span>、</label>
      </p>
    </section>
    <section id="section2">
      <div class="title">
        <h3>产品介绍</h3>
      </div>
      <div v-if="varitayCode=='common'">
        <div class="proImg">
          <img src="../../images/product.jpg">
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
   
      <p  v-if="insureDatas.claimsBook.length>0">
        查看 <label v-for="item in insureDatas.claimsBook" :key="item.id"><span>{{item.name}}</span>、</label>

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
        <div class="more" v-if="insureDatas.problem.length>2" @click="changeFoldState">
          <span class="moreDe"> {{ brandFold? '查看更多':' '}}<i data-v-19455e20 class="iconfont icon icon-arrows_down font"></i></span>
        </div>
      </div>
    </section>
    
    <div >
    <div class="bottom">
      <div class="bottomLeft">
        <img src="../../images/share.png" class="bottomLeftPic">
        <router-link to="/poster" class="bottomLeftText">分享海报</router-link>
      </div>
      <div class="bottomLeft">
        <img src="../../images/share.png" class="bottomLeftPic">
        <span class="bottomLeftText">制作计划书</span>
      </div>
      <div class="bottomRight" >
        <router-link to="/notice" class="toubao">立即投保</router-link>
        </div>
    </div>
    </div>
     
  </div>
</template>

<script>
export default {
  props: {
    insureDatas: {
      default: {}
    }
  },
  created() {
    this.varitayCode = sessionStorage.varitayCode;
    this.typeCode = sessionStorage.typeCode;
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
      typeCode: "",
      problem: "",
      brandFold: true
    };
  },
  computed: {
    showdetailList: {
      get: function() {
        if (this.brandFold) {
          // console.log(this.insureData.problem.length)
          if (this.insureDatas.problem.length < 5) {
            return this.insureDatas.problem;
          }
          let newArr = [];
          for (var i = 0; i < 4; i++) {
            let item = this.insureDatas.problem[i];
            newArr.push(item);
          }
          return newArr;
        }
        return this.insureDatas.problem;
      },
      set: function(val) {
        this.showdetailList = val;
      }
    }
  },

  methods: {
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
      this.brandFold = !this.brandFold;
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
  .bottomLeftPic {
    width: 45px;
    height: 45px;
    display: block;
  }
  .bottomLeftText {
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
  .toubao {
    color: #fff;
    text-align: center;
    line-height: 96px;
  }
  .short {
    width: 266px;
    margin-left: 70px;
  }
}
</style>
