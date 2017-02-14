<template>
  <div>
    <mt-header fixed title="注册"></mt-header>
    <div class="main-content">
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="确认密码" placeholder="请重复输入密码" type="password"></mt-field>
      <div class="btn-group">
        <mt-button type="primary" size="large">注&nbsp;测</mt-button>
        <p>已有账号？</p>
        <mt-button plain size="large">登&nbsp;录</mt-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Register'
  }
</script>

<style>
  .btn-group{
    margin-top: 10px;
  }
</style>
