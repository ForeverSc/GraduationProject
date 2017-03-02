<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  sockets:{
    connect(){
      console.log('socket connected')
    },
    newOrder(msg){
      this.$toast({
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
  .main-content{
    padding-top: 40px;
  }
</style>
