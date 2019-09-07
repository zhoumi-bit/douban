<template>
<div>
    <div class="box" v-for="(v,i) in arr" :key="i">
       <div class="top">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII=" alt="">
            <p>豆瓣</p>
            <p>写了日记</p>
            <span>2019-9-5 17:01:34</span>
       </div>
       <div class="foot">
           <h4>豆瓣App 4.12.0主要更新</h4>
           <p> - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
            </p>
       </div>
       <div class="ball">
            <img src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg" alt="">
            <span>4</span>
            <img src="https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg" alt="">
             <span>0</span>
            <img src="https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg" alt="">
            <span>1</span>
            <img src="https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg" alt="">
       </div>
      
    </div>

    </div>
</template>
<script>
export default {
    components:{
    },
     data(){
       return{
           arr:[1,1,1,1,1,1]
       }
    }
    
}
</script>
<style scoped>
    .box{
        width: 90%;
        margin: 0 auto;
        border-bottom: .01rem solid gainsboro; 
       
    }
    .top{
        width: 100%;
        margin: 0 auto;
        margin-top: .3rem;
         overflow: hidden;
    }
    img:nth-of-type(1){
        display: block;
        width: .45rem;
        height: .45rem;
        border-radius: 50%;
        float: left;
        /* margin-right: rem; */
    }
    .top p:nth-of-type(1){
        font-size: .16rem;
        color: black;
        float: left;
        margin-top: .1rem;
    }
     .top p:nth-of-type(2){
        font-size: .16rem; 
        margin-top: .1rem;
    }
    .top span{
        display: block;
        clear: both;
        margin-left: .6rem;
        font-size: .14rem;
        color: #aaa;
    }
    .foot{
        width: 82%;
        /* height: .5rem; */
        border:.01rem solid gainsboro;
        margin-left: .6rem;
        margin-bottom: .24rem;
    }
    h4{
        font-size: .16rem;
        font-weight: 100;
        color: #494949;
        margin-top: .2rem;
        margin-left: .2rem;
        margin-bottom: .15rem;
    }
    p{
        margin-left: .2rem;

    }
    .ball{
        width: 82%;
        height: .27rem; 
        
        margin-left: .6rem;
       margin-bottom: .24rem;
    }
    .ball img{
        width: .24rem;
        height: .24rem;
        float: left;
    }
    .ball span{
        display: block;
        line-height: .27rem;
        margin-right: .35rem;
        font-size: .14rem;
        color: #ccc;
        padding-bottom: .3rem;
        float: left;
    }
    .ball img:nth-of-type(4){
    float: right;
    }
    
</style>