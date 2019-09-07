<template>
<div class="all">
    <a :href="hre">
        <div class="box">
            <h3 :style="yanse">{{title}}</h3>
            <span >{{content}}</span>
        </div>
    </a>
</div>
    
</template>
<script>
export default {
    props:{
        hre:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        yanse:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>

    .box{
        width: .9rem;
        height: .6rem;
        /* background: pink; */
        margin-top: .4rem;
        margin-left: .25rem;
    }
    .box h3{
       
        font-weight: 100;
        text-align: center;
        
    }
   .box span{
        display: block;
        text-align: center;
        font-size: .12rem;
        color: #999;
    }
</style>