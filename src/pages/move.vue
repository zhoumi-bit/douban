<template>
    <div>
        <routerLinkNav></routerLinkNav>
        <div class="box">
            <p>影院热映</p>
            <span>更多</span>
        </div>
        <slider :sfu="arra"></slider>
       <div class="box">
            <p>免费在线观影</p>
            <span>更多</span>
        </div>
        <slider :sfu="arrb"></slider>
       <div class="box">
            <p>新片速递</p>
            <span>更多</span>
        </div>
        <slider :sfu="arrc"></slider>
        <div class="box">
            <p>发现好电影</p>
            <span>更多</span>
        </div>
         <flash :arr="obja"></flash>
        <fenlei :arra="obj"></fenlei>
       <foot></foot>
   
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import slider from '../components/slider'
import foot from '../components/foot'
import fenlei from '../components/fenlei'
import flash from '../components/flash'
export default {
    components:{
        routerLinkNav,
        slider,
        foot,
        fenlei,
        flash
    },
    data(){
        return{
            arr:[],
            obj:[],
            obja:[]
        }
    },
   
    created() {
        this.axios({
            url:"/dianying",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data)
            this.arr=ok.data.movie
            this.obj = ok.data.fenlei
            this.obja = ok.data.faxianhaodianying

        })
    },
     computed: {
        arra(){
           var dataa = this.arr.filter((v,i)=>{
                if(i<5){
                   return this.arr[i]
                }
            })
            return dataa;
        },
        arrb(){
           var dataa = this.arr.filter((v,i)=>{
                if(i>3){
                   return this.arr[i]
                }
            })
            return dataa;
        },
        arrc(){
           var dataa = this.arr.filter((v,i)=>{
                if(i>5){
                   return this.arr[i]
                }
            })
            return dataa;
        },
    },
}
</script>
<style scoped>
.box{
        width: 90%;
        /* background: palegoldenrod; */
        margin: 0 auto;
        overflow: hidden;
        margin-bottom: .1rem;
    }
    .box p{
        margin-bottom: 0rem;
        margin-top: .2rem;
        float: left;
        font-size: .18rem;
        color: black;
    }
    .box span{
        display: block;
        float: right;
        margin-top: .2rem;
        font-size: .14rem;
        color: #42bd56;
    }

    
</style>