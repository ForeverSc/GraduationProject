<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 18px;">商家注册</span>
      </div>
      <el-form ref="ruleForm2">
        <el-form-item label="店铺名">
          <el-input  v-model="shopName" placeholder="请输入店铺名"></el-input>
        </el-form-item>
        <el-form-item label="店铺电话">
          <el-input v-model="shopTel" placeholder="请输入店铺电话"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址">
          <el-input type="textarea" v-model="shopAddr" placeholder="请输入店铺地址"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍">
          <el-input type="textarea" v-model="shopDetail" placeholder="请输入店铺地址"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="rePassword" placeholder="请重复输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegister">提交</el-button>
          <el-button @click="reset">重置</el-button>
          <el-button type="text" @click="handleLogin">已有账号？去登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import Upload from '../components/upload.vue'

  export default {
    name: 'Login',
    data() {
      return {
        shopName: '',
        shopTel: '',
        shopAddr: '',
        shopDetail: '',
        password: '',
        rePassword: ''
      }
    },
    components:{
      Upload
    },
    methods: {
      submitRegister(){
          this.$store.dispatch('register', {
              shopName: this.shopName,
              shopTel: this.shopTel,
              shopAddr: this.shopAddr,
              shopDetail: this.shopDetail,
              password: this.password,
              rePassword: this.rePassword
          })
      },
      reset(){
          this.shopName = ''
          this.shopTel = ''
          this.shopAddr = ''
          this.shopDetail = ''
          this.password = ''
          this.rePassword = ''
      },
      handleLogin(){
          this.$router.push('/login')
      },
      handleUpload(file){
          this.$store.dispatch('uploadFile', { file })
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
</style>
