<template>
    <div>
        <routerLinkNav></routerLinkNav>
        <div class="box">
            <p>最受关注的图书 | 虚构类</p>
            <span>更多</span>
        </div>
        <slider :sfu="arr"></slider>
         <div class="box">
            <p>最受关注的图书 | 非虚构类</p>
            <span>更多</span>
        </div>
        <slider :sfu="arrb"></slider>
        <div class="box">
            <p>发现好书</p>
            <span>更多</span>
        </div>
        <flash :arr="obja"></flash>
        <fenlei :arra="obj"></fenlei>
        <root></root>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import slider from '../components/slider'
import flash from '../components/flash'
import fenlei from '../components/fenlei'
import root from '../components/foot'
export default {
   components:{
       routerLinkNav,
       slider,
       flash,
       fenlei,
       root
   },
   data(){
       return{
            obj:[],
            arr:[],
           obja:[]
       }
   },
   created() {
       this.axios({
           url:"/tushu",
           type:"get"
       }).then((ok)=>{
           console.log(ok.data.fenlei)
           this.obj = ok.data.fenlei
            this.arr = ok.data.books
            this.obja = ok.data.goodBook
       })
   },
   computed: {
       arrb(){
           var dataa = this.arr.filter((v,i)=>{
                if(i>2){
                    return this.arr[i]
                }
           })
           return dataa
       }
   },
}
</script>
<style scoped>
    .box{
        width: 90%;
        margin: 0 auto;
        /* overflow: hidden; */
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