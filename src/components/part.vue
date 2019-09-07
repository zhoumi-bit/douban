<template>
    <div class="box">
       <div class="left">
           <h3>{{titles}}</h3>
           <p>{{content}}</p>
           <span>{{temp}}</span>
       </div>
       <div class="right">
           <img :src="imgurl">
           <p>本栏目来自于{{temp}}</p>
       </div>
    </div>
</template>
<script>
export default {
   
    props:{
        
            titles:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            },
            temp:{
                type:String,
                required:true
            },
            imgurl:{
                type:String,
                required:true
            }
            
        
    }
}
</script>
<style scoped>
   .box{
       margin: .25rem .23rem;
       border-bottom: 1px solid #ccc;
       overflow: hidden;
   }
   h3{
       font-size: .16rem;
       font-weight: 100;
       line-height: .21rem;
   }
   .left p{
       font-size: .13rem;
       line-height: .23rem;
       overflow: hidden; 
       width:2.2rem;
       height: .41rem;     
   }
   .left{
       width:2.2rem;
       /* background: pink; */
       float: left;
   }
   .right img{
       width: .84rem;
       height: 1.04rem;
       float: right;
   }
   .right p{
       /* margin-top: .2rem; */
       float: right;
   }
   span{
       display: block;
       font-size: .12rem;
       /* line-height: .16rem; */
       margin-top: .2rem;
       padding-bottom: .3rem;
       color: #ccc;
   }
</style>