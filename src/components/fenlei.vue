<template>
    <div class="box">
        <p>分类浏览</p>
        <div class="ball" >
            <a :href="v.href" v-for="(v,i) in arra" :key="i" >{{v.title}}<span class="mui-icon mui-icon-arrowright"></span></a>

        </div>
    </div>
</template>
<script>
export default {
    props:{
        arra:{
            type:Array,
        },
       
    }
}
</script>
<style scoped>
    .box{
        width: 95%;
        margin: 0 auto;
        /* float: right; */
        /* background: palegreen; */
    }
    p{
        font-size: .20rem;
        color: black;
        margin-bottom: .2rem;
    }
    .ball{
        display: flex;
        flex-wrap: wrap;
        /* margin-bottom: .6rem; */
    }
    a{
        display: block;
        width: 50%;
        height: .5rem;
        border-top: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        padding-left: .1rem;
        line-height: .5rem;
        color: #42bd56;
    }
    span{
        float: right;
        margin-right: .2rem;
        line-height: .5rem;
        color: gainsboro;
    }
</style>