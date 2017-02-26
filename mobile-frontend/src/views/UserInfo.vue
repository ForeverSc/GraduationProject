<template>
  <div>
    <mt-cell
      title="用户名"
      to="/"
      :value="username">
    </mt-cell>
    <mt-cell
      title="收货地址"
      to="/"
      is-link>
    </mt-cell>
    <mt-cell
      title="个人信息"
      to="/"
      is-link>
    </mt-cell>
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
