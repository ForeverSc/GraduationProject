<template>
  <div>
    <mt-header fixed title="注册"></mt-header>
    <div class="main-content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="请重复输入密码" type="password" v-model="rePassword"></mt-field>
      <div class="btn-group">
        <mt-button type="primary" size="large" @click="handleRegister">注&nbsp;测</mt-button>
        <p>已有账号？</p>
        <mt-button plain size="large" @click="handleLogin">登&nbsp;录</mt-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Register',
    data(){
        return {
            username: '',
            password: '',
            rePassword: ''
        }
    },
    methods: {
        handleRegister(){
            this.$store.dispatch('register', {
                username: this.username,
                password: this.password,
                rePassword: this.rePassword
            })
        },
        handleLogin(){
            this.$router.push('/login')
        }
    }
  }
</script>

<style>
  .btn-group{
    margin-top: 10px;
  }
</style>
