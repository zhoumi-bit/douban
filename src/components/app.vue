<template>
    <div class="box">
        <div class="ball">
            <p>打开App，浏览更多</p>
            <div class="one">
                <a href="#">极速下载</a>
                <a href="#">打开</a>
            </div>
          
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        width: 100%;
        height: .8rem;
        background: url(../../static/dou.jpg) no-repeat ;
        background-size: 100%;
    }
    .ball{
        width: 90%;
        height: .3rem;
        /* background: pink; */
        float: right;
        /* margin-right:.2rem;  */
        line-height: .3rem;
        margin-top: .3rem;
    }
    .ball p{
        float: left;
        font-size: .14rem;
        color: #42bd56;
    }
    .one{
        width:1.7rem;
        height: .3rem;  
        float: right;
        /* background:skyblue; */
    }
   .one a:nth-of-type(1){
       display: inline-block;
        width: .9rem;
        height: .3rem;
        background: #42bd56;
        text-align: center;
        line-height: .3rem;
        border-radius: .05rem;
        color: white;
        font-size: .14rem;
    }
     .one a:nth-of-type(2){
         font-size: .14rem;
         display:inline-block;
         text-align: center;
         height: .3rem;
         border-radius: .05rem;
         border: .01rem solid #42bd56;
         width: .6rem;
         color: #42bd56;
     }
</style>