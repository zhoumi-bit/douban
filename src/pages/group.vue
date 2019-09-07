<template>
    <div>
        <routerLinkNav></routerLinkNav>
        <appone></appone>
        <team :sfua="arr" text="租房找室友" con="更多相关小组"></team>
        <team :sfua="arra" text="来聊五块钱" con="来聊五块钱"></team>
        <team :sfua="arrb" text="买买买" con="更多相关小组"></team>
        <foot></foot>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import appone from '../components/appone'
import  team from '../components/team'
import foot from '../components/foot'
export default {
    components:{
        routerLinkNav,
        appone,
        team,
        foot
    },
  data(){
      return{
          arr:[],
          arra:[],
          arrb:[]
      }
  },
    created(){
        this.axios({
            url:"/team",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data)
            this.arr= ok.data.xiaozua
            this.arra = ok.data.xiaozub
            this.arrb = ok.data.xiaozuc
        })
    },
}
</script>
<style scoped>
    
</style>