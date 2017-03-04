<template>
  <div>
    <mt-cell
      title="用户名"
      :value="username">
    </mt-cell>
    <mt-cell
      title="修改信息"
      to="/setUserInfo"
      is-link>
    </mt-cell>
    <!--<mt-cell-->
      <!--title="联系我们"-->
      <!--to="/"-->
      <!--is-link>-->
    <!--</mt-cell>-->
    <mt-button type="danger" size="large" style="margin-top: 30px;" @click="handleLogout">退出登录</mt-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'user-info',
    computed: mapGetters([
        'username'
    ]),
    methods:{
      handleLogout(){
          this.$store.dispatch('logout')
      }
    }
  }
</script>
