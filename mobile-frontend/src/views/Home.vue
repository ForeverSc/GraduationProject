<template>
  <div>
    <mt-header fixed :title="title"></mt-header>
    <mt-tab-container v-model="active" :swipeable="true" style="margin-top:40px;">

      <mt-tab-container-item id="tab-takeout">
        <shop-list></shop-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-orders">
        <order-list></order-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-user">
        <user-info></user-info>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar style="position: fixed;" v-model="active">
      <mt-tab-item id="tab-takeout">
        <img slot="icon" src="../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab-orders">
        <img slot="icon" src="../assets/order.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab-user">
        <img slot="icon" src="../assets/user.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import ShopList from './ShopList'
  import OrderList from './OrderList'
  import UserInfo from './UserInfo'

  export default {
      name: 'Home',
      components: {
        ShopList,
        OrderList,
        UserInfo
      },
      data(){
          return {
            active: 'tab-takeout'
          }
      },
      computed: {
          title(){
              switch(this.active){
                case 'tab-takeout': return '外卖'; break;
                case 'tab-orders': return '订单'; break;
                case 'tab-user': return '我的';  break;
                default: return ''; break;
              }
          }
      }
  }
</script>
