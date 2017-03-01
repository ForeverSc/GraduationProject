<template>
  <div>
    <mt-cell
      title="用户名"
      to="/"
      :value="username">
    </mt-cell>
    <mt-cell
      title="个人信息"
      to="/"
      is-link>
    </mt-cell>
    <mt-cell
      title="联系我们"
      to="/"
      is-link>
    </mt-cell>
    <mt-button type="danger" size="large" style="margin-top: 30px;">退出登录</mt-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'user-info',
    computed: mapGetters([
        'username'
    ])
  }
</script>
