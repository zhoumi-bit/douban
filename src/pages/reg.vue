<template>
  <div class="box">
    <h3>欢迎加入豆瓣</h3>
    <div class="mui-input-row txt">
      <input type="text" placeholder="邮箱" v-model="emil"/>
    </div>
    <div class="mui-input-row">
      <input type="password" class="mui-input-password" placeholder="请输入密码"  v-model="upwd"/>
    </div>
    <div class="mui-input-row">
      <input type="text" placeholder="用户名"  v-model="uname"/>
    </div>
    <button type="button" class="mui-btn mui-btn-success" @click="fun()">立即注册</button>
    <p>点击「注册」代表你已阅读并同意用户使用协议</p>
    <div class="btn">
        <a href="#">下载豆瓣App</a>
    </div>
  </div>
</template>
<script>


export default{
    data(){
        return{
            emil:"",
            upwd:"",
            uname:"",
        }
    },
    methods:{
        fun(){
            this.axios({
                method:"get",
                url:"http://localhost:3000/reg",
                params:{
                   emil : this.emil,
                   upwd :  this.upwd,
                   uname : this.uname   
                }
            }).then((ok)=>{
                console.log(ok)
                if(ok.data.linkid==1){
                    alert("注册成功")
                    this.$router.push({path:"/login"})
                }else if(ok.data.linkid==0){
                    alert("注册失败,请重新注册")
                }
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
h3 {
  font-size: 0.4rem;
  margin: 10% 0 9%;
  font-weight: 300;
  color: #42bd56;
  text-align: center;
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
    margin-left: 1.5rem;
    line-height: .14rem;
}
</style>