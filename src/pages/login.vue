<template>
  <div class="box">
    <h3 id="hh">
        <a href="#" class="aa">取消</a>
        登录豆瓣
    </h3>
    <div class="mui-input-row txt">
      <input type="text" placeholder="邮箱" v-model="emil"/>
    </div>
    <div class="mui-input-row">
      <input type="password" class="mui-input-password" placeholder="Token"  v-model="upwd"/>
    </div>
    <button type="button" class="mui-btn mui-btn-success" @click="fun()">登录</button>
    <p>使用其他方式登录&nbsp;&nbsp;& &nbsp;&nbsp;找回密码</p>
    <div class="btn">
        <a href="#">注册豆瓣账号</a>
        <a href="#">下载豆瓣App</a>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            emil:"",
            upwd:""
        }
    },
    methods:{
        fun(){
            var param=new URLSearchParams;

			param.append("emil",this.emil)
			param.append("upwd",this.upwd)

            this.axios({
                method:"post",
                url:"http://localhost:3000/login",
                data:param
            }).then((ok)=>{
                console.log(ok)
            })
        }
    }
};

</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
#hh {
    width: 100%;
    padding: 0.03rem;
  font-size: 0.18rem;
  margin: 4% 0 4%;
  color: black;
  font-weight: 500;
  text-align: center;   
  position: relative;
}
 #hh .aa{
    margin-left: 0rem;
    position: absolute;
    left: .21rem;
    top: .08rem;
    
}
.mui-input-row {
  margin: 0 0.2rem;
}
.mui-input-row input {
  height: 0.5rem;
  margin-bottom: 0rem;
  border-top: 0rem;
}
.txt {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.mui-btn {
  width: 3.36rem;
  height: 0.45rem;
  margin: 0.15rem 0.2rem 0rem;
  font-size: 0.16rem;
}
 p{
  color: #aaa;
  text-align: center;
  margin-top: .2rem;
  
}
.btn{
    margin-top: .4rem;
}
a{
    color: #42bd56;
    font-size: .14rem;
    line-height: .14rem;  
}
.btn a:nth-of-type(1){
    margin-left: .9rem;
}
.btn a:nth-of-type(2){
    margin-left: .25rem;
}
</style>