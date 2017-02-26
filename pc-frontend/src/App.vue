<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="1" :route="{path: 'home'}">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" :route="{path: 'shopInfo'}">店铺管理</el-menu-item>
        <el-menu-item index="2-2" :route="{path: 'menu'}">菜单管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">订单管理</template>
        <el-menu-item index="3-1" :route="{path: 'orders'}">进行中的订单</el-menu-item>
        <el-menu-item index="3-2" :route="{path: 'historyOrders'}">历史订单</el-menu-item>
      </el-submenu>
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
  ])
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
    height: 100%;
  }
</style>
