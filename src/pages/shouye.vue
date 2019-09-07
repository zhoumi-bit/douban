<template>
    <div class="header">
       <routerLinkNav></routerLinkNav>
       <div class="middle">
            <a href="#">影院热映</a>
            <a href="#">欧美新碟榜</a>
            <a href="#" @click="fun()">注册账号</a>
            <a href="#" @click="funa()">登录豆瓣</a>
       </div>
       <img src="../../static/v.gif"  v-if="arr.length<=0">
        <part v-else v-for="(v,i) in arr" :key="i" :titles="v.title" :content="v.content" :temp="v.category_name" :imgurl="v.image"></part>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import part from '../components/part'
export default {
    components:{
        routerLinkNav,
        part,
    },
    data(){
        return{
            arr:[]
        }
    },
   
         created() {
            this.axios({
                method:"get",
                url:"/part"
            }).then((ok)=>{
                
                this.arr=ok.data.shouye
                console.log(this.arr)
            })
        },
        methods: {
            fun(){
                this.$router.push("/reg")
            },
            funa(){
                this.$router.push("/login")
            }
        },
    
}
</script>
<style scoped>
    .header{
        width: 100%;
         
    }
    .middle{
        width:100%;
        height: 1.1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: .25rem; 
        padding: 0 .23rem;
          /* margin-top: .8rem; */
    }
    img{
       margin-left: 40%;

    }
    .middle a{
        display: block;
        width: 1.6rem;
        height: .5rem;
        background:  #f6f6f6;
        text-align: center;
        line-height: .5rem;
        color: black;
        font-size: .16rem;
        margin-bottom: .1rem;
    }
</style>