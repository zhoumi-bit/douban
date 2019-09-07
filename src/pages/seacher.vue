<template>
<div>
    <div class="header">
        <p @click="fun()">关闭</p>
        <input type="text">
    </div>
    <div class="middle">
         <find v-for="(v,i) in arr" :key="i" :title="v.tit" :content="v.text" :hre="v.href" :yanse="v.color"></find>
    </div>
    <div class="footer">
        <a href="#">注册账号</a>
        <a href="#"><span>登录豆瓣</span> </a>
           
        <a href="#">使用桌面</a>
        <a href="#">使用豆瓣app</a>
    </div>
</div>
   
</template>
   
<script>
import find from '../components/find'
export default {
    components:{
        find,
    },
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/find",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.sousuo
            // console.log(ok.data.sousuo)
        })
    },
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: .6rem;
    border-bottom: 1px solid gainsboro;
}
p{
    font-size: .14rem;
    color: green;
    float: left;
    line-height: .6rem;
    margin: 0;
    padding-left: .25rem;
}
input{
    width: 2.8rem;
    height: .4rem;
    float: right;
    line-height: .6rem;
    background: #F3F3F3;
    margin: .1rem 0 0;
    margin-right: .25rem;
}
.middle{
    display: flex;
    flex-wrap: wrap;
}
.footer{
    display: flex;
    flex-wrap: wrap;
    margin-top: .3rem;
}
.footer a{
    display: block;
    width: 50%;
    height: .5rem;
    text-align: center;
    border-top: .01rem solid gainsboro;
    line-height: .5rem;
    color: #42bd56;
    font-size: .14rem;
}

.footer a:nth-of-type(3){
    border-bottom: .01rem solid gainsboro;
}
.footer a:nth-of-type(4){
    border-bottom: .01rem solid gainsboro;
}
</style>>
    
