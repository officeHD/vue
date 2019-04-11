<template>
	<div class="wrapper">
        <div class="top">
        <div class="nav">
            <div class="navLeft"><img src="../../images/left-circle.png" @click="prev"></div>
            <div class="navMid">产品海报</div>
            <div class="navRight"></div>
        </div>
        </div>
        <div class="content">
            <div class="bg">
                <ul>
                    <li>
                        <img src="../../images/bg2_02.jpg">
                        <!-- <swiper :list="bgList" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></swiper> -->
                    </li>
                </ul>
                <div class="imgBottom">
                    <div class="imgBotttomLeft">
                        <p>详细咨询：<span>刘伟</span></p>
                        <p>联系方式：<span>15678412110</span></p>
                    </div>
                    <div class="imgBottomRight"><img src="../../images/we.jpg"></div>
                </div>
            </div>
            <div class="bottom">
                <div class="moments" @click="jumpMoments"><img src="../../images/moments.png"></div>
                <div class="weChat" @click="jumpWeChat"><img src="../../images/weChat.png"></div>
            </div>
        </div>
        
	</div>
</template>

<script>

    import { Swiper } from 'vux'
//     const demoList = imgList.map((one, index) => ({
//   url: 'javascript:',
//   img: one
// }))
	export default {
		// props:['methods'],
		components: {
			//  Swiper
		},
		data() {
			return {
                bgList: [

                ],
			};
		},

		created: function() {
		
		},
		methods: {
            prev(){
                this.$router.go(-1)
            },
            jumpMoments(){
                console.log('朋友圈')
            },
            jumpWeChat(){
                console.log('微信')
            }
    },
}
</script>

<style scoped lang="less">
.top{
    width: 100%;
    height: 80px;
    
}
.nav{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    position: fixed;
     top: 0;
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
        letter-spacing: 2px;
    }
    .navRight{
        width: 50px;
        height: 50px;
    }
}
    .content{
        
        width: 100%;
        height:auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // margin-top: 80px;
        margin-bottom: 100px;
        background: url(../../images/bg.png) no-repeat ;
        background-size: cover;
        .bg{
    
            width: 550px;
            margin-top: 0px;
        }
        li{
            margin-top: 80px;
        }
        .imgBottom{
            width: 550px;
            height: 150px;
            background: #fff;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            box-shadow: 5px 5px 5px #f6f4f5;
        }
        p{
            font-size: 28px;
            color: #b6b6b6;
            letter-spacing: 2px;
        }
        span{
            color: #333;
        }
        .imgBottomRight{
            width: 100px;
            height: 100px;
        }
        .bottom{
        
            width: 550px;
            margin-top:70px;
            margin-bottom: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center; 
        }
        .moments{
    
            width: 98px;
            height: 98px;
        }
        .weChat{
            width: 98px;
            height: 98px;
        }
    }

</style>
