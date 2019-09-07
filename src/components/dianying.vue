<template>
 <div class="picture">
        <a :href="hre">
            <div class="one">
                <img :src="imgurl">
                <i>{{title}}</i>
            </div>
        </a>
</div>

    
</template>
<script>
export default {
    props:{
        hre:{
            type:String,
            
        },
        imgurl:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
  
    .one {
        width: 1.5rem;
         margin-right: .05rem;
    }
    .one img{
        width: 1.5rem;
        height: 2rem;
    }
    .picture i{
        display: block;
        font-style: normal;
        text-align: center;
        color: black;
    }
</style>