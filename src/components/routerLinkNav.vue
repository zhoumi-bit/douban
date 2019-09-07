<template>
    <div class="anav">
        <div class="nav">
            <a href="#" @click="funa()"><img src="../../static/1.png"></a>
            <div class="nava">
                <router-link to="/move">电影</router-link>
                <router-link to="/book">图书</router-link>
                <router-link to="/video">广播</router-link>
                <router-link to="/group">小组</router-link>
            </div>
            <router-link to="/seacher" href="#" @click="fun()"><img src="../../static/seacher.png"></router-link>
        </div>     
    </div>
</template>
<script>
export default {
    methods: {
        fun(){
            this.$router.push("/seacher")
        },
         funa(){
            this.$router.push("/shouye")
        },
    },
}
</script>
<style scoped>
    .anav{
        width: 100%;
        height: .7rem;
      
    }
        .nav{
        width: 100%;
        height: .7rem;
        border-bottom: .01rem solid silver;
        position: fixed;
          /* background: pink; */
        background: white;
        /* left: 0;
        top:0; */
    }
    .nava{
        display: flex;
        justify-content: space-around;
        width:2rem;
        height: .15rem;
        /* background: aqua; */
        margin-left: 1.2rem;
        padding-top: .25rem;
        
    }
    
    a:nth-of-type(1) img{
        width: .6rem;
        height: .3rem;
        float: left;
        margin-left:.2rem;
        margin-top: .2rem;      
    } 
  .nav a:nth-of-type(2) img{
       width: .25rem;
       height: .25rem;
       float: right;
       margin-right: .2rem;
       /* margin-top: .25rem; */
   }
   .nava a:nth-of-type(2){
       color:  rgb(159, 120, 96);
   }
   .nava a:nth-of-type(3){
       color:  rgb(228, 168, 19);
   }
   .nava a:nth-of-type(4){
         color:rgb(42, 184, 204);
   }
</style>