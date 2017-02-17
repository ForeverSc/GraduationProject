<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 18px;">商家登录</span>
      </div>
      <div>
        <el-input placeholder="请输入店铺名" v-model="shopName">
          <template slot="prepend">店铺名</template>
        </el-input>
      </div>
      <div style="margin-top: 20px;">
        <el-input type="password" placeholder="请输入密码" v-model="password">
          <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
        </el-input>
      </div>
      <div class="btn-group" style="margin-top: 20px;">
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button type="text" @click="handleRegister">还没账号？去注册</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        shopName: '',
        password: ''
      }
    },
    methods:{
        handleLogin(){
            this.$store.dispatch('login', {
                shopName: this.shopName,
                password: this.password
            })
        },
        handleRegister(){
            this.$router.push('/register')
        }
    }
  }
</script>

<style>
.container{
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
</style>
