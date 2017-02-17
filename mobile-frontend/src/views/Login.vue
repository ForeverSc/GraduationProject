<template>
  <div>
    <mt-header fixed title="登录"></mt-header>
    <div class="main-content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div class="btn-group">
        <mt-button type="primary" size="large" @click="handleLogin">登&nbsp;录</mt-button>
        <p>还没账号？</p>
        <mt-button plain size="large" @click="handleRegister">注&nbsp;测</mt-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
      name: 'Login',
      data(){
          return {
              username: '',
              password: ''
          }
      },
      methods: {
          handleLogin(){
              this.$store.dispatch('login', {
                  username: this.username,
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
.btn-group{
  margin-top: 10px;
}
</style>
