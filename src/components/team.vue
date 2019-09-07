<template>
<div>
<div class="ball">
     <p>{{text}}</p>
    <div class="box" v-for="(v,i) in sfua" :key="i">
        <div class="big">
            <img :src="v.images.small">
            <span>{{v.title}}</span>
            <i>20005人</i>
        </div>
        <span>{{v.group_topic.time}}</span>
        <span>{{v.group_topic.title}}</span>
    </div>
</div>
    <a href="#">{{con}}</a>
</div>
</template>
<script>
export default {
     props:{
         sfua:{
             type:Array,
             required:true
         },
        text:{
            type:String,
            required:true
        },
        con:{
             type:String,
            required:true
        }
     }
}
</script>
<style scoped>
    .box{
        width: 95%;
        margin-left:.2rem;
        /* background: pink; */
        overflow: hidden;
        border-bottom: .01rem solid gainsboro;
    }
    .ball p{
        font-size: .18rem;
        padding-top: .3rem;
        color: black;
        margin-bottom: 0rem;
        margin-left:.2rem;
    }
    .big{
        width: 95%;
         margin-right:.2rem;
        overflow: hidden;
        padding-top: .18rem;
        margin-bottom: .1rem;
    }
    .big img{
        width: .48rem;
        height: .48rem;
        display: block;
        float: left;
    }
    .big span{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 2rem;
        font-size: .18rem;
        margin-left: .1rem;
        line-height: .48rem;    
    }
    i{
        font-style: normal;
        float: right;
        color: #cccccc;
        font-size: .15rem;
        line-height: .48rem;

    }
    .big span:nth-of-type(2){
        float: left;
    }
    .box span{
        font-size: .15rem;
        color: #aaaaaa;
        display: block;
        float: left;
    }
    .box span:nth-of-type(2){
        width: 2.294rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: .26rem;
        margin-bottom: .2rem;
    }

    a{
        display: block;
        width: 95%;
        margin-left:.2rem;
        padding-top: .2rem;
        text-align: center;
        padding-bottom: .4rem;
        color: #42bd56;
    }
</style>