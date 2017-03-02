<template>
  <div id="app">
    <el-menu v-if="loginStatus" theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="1" :route="{path: 'home'}">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" :route="{path: 'shopInfo'}">店铺管理</el-menu-item>
        <el-menu-item index="2-2" :route="{path: 'menu'}">菜单管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">订单管理</template>
        <el-menu-item index="3-1" :route="{path: 'orders'}">进行中的订单</el-menu-item>
        <el-menu-item index="3-2" :route="{path: 'historyOrders'}">已完成的订单</el-menu-item>
      </el-submenu>
      <el-button @click="handleLogout" type="danger" style="float: right; margin: 10px;">退出</el-button>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'loginStatus'
  ]),
  methods:{
    handleLogout(){
        this.$store.dispatch('logout')
    }
  },
  sockets:{
    connect(){
      console.log('socket connected')
    },
    newOrder(msg){
      this.$notify({
         title: '提示',
         message: '你有一份新订单！请前往处理中心查看详情。',
         duration: 0
      });
      this.$store.dispatch('getOrderListByShopName', {shopName: this.$store.state.login.shopName, state: 0})
    }
  }
}
</script>
<style>
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background:#dfdfdf;
  }
  #app{
    width: 100%;
  }
</style>
