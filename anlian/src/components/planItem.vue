<template>
     <li >
        <div class="betweenFlex listItem">
            <span>{{data.title}}</span>
            <span @click="showContent=!showContent">{{data.name}} <i :class="['iconfont  icon',showContent?'icon-arrows_up':'icon-arrows_down' ]"></i> </span>
        </div>
        <div class="content" v-if="showContent">
            {{data.content}}
        </div>
        
    </li>
</template>

<script>
    export default {
        props:{
            data:Object
        },
        data(){
            return{
                showContent:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .listItem{
        padding: 0 20px;
        height: 64px;
        line-height: 64px;
        .icon{
             color: #333;
             font-size: 32px;
        }
       
    }
    .content{
        font-size: 28px;
        padding:10px 20px;
    }
     
</style>
