<template>
    <div>
        <routerLinkNav></routerLinkNav>
        <app></app>
        <appone></appone>
        <date></date>
        <foot></foot>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import app from '../components/app'
import appone from '../components/appone'
import date from '../components/date'
import foot from '../components/foot'
export default {
    components:{
        routerLinkNav,
        app,
        appone,
        date,
        foot
    },
   
    
}
</script>
<style scoped>
    
</style>