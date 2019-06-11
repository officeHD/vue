<template>
  <div class="">
      <NavBar title="学校简介"/>

      <div class="introduce">
    <img :src="require('@/images/school.jpg')">
    <p>合肥一六八中学（Hefei 168 Middle School）位于安徽省合肥市，是一所由合肥市教育局主管的公立全日制完全中学，安徽省示范普通高中。</p>
    <p>学校创建于2002年，2012年1月23日，合肥一六八教育集团成立、代管经开区玫瑰园学校。 [1] 2017年1月16日下午，合肥一六八教育集团正式托管合肥一六八新桥学校。</p>
    <p>据2018年7月学校官网显示，合肥一六八中学占地300亩，建筑面积达十万平方米，有小学、初中、高中、国际部、复读班共计282个教学班，15800名学生，952名位教职工。</p>
  </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  computed: {
     
  },
  components: {
    NavBar
  },
  methods: {
    
  }
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
