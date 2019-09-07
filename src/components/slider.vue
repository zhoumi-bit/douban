<template>
    <div>
       <div class="ball">
             <dianying v-for="(v,i) in sfu" :key="i" :title="v.title" :imgurl="v.images.small"></dianying>
        </div>
    </div>
</template>
<script>
import dianying from '../components/dianying'
export default {
    components:{
        dianying,
    },
    props:{
        sfu:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .ball{
        display: flex;
        width: 90%;
        margin: 0 auto;
        overflow: auto;
    }
</style>