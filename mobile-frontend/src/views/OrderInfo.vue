<template>
  <div>
    <mt-header fixed title="订单详情">
      <mt-button slot="left" icon="back" @click="goBack">返回</mt-button>
    </mt-header>
    <div class="container">
      <div class="order-shop">
        <img src="" alt="">
        {{ orderInfo.shopName }}
        <div class="order-state">
          {{ orderInfo.stateText }}
        </div>
      </div>
      <div class="order-info">
        <mt-cell v-for="dish in orderInfo.dishs"
                 :title="dish.dishName"
                 :value="dish.dishPrice + '￥' + ' * ' + dish.dishNum"></mt-cell>
        <mt-cell title="总计"
                 :value="orderInfo.total + '￥'"></mt-cell>
      </div>
      <div class="order-user">
        <div class="order-user_title">配送信息</div>
        <mt-cell title="用户" :value="orderInfo.username"></mt-cell>
        <mt-cell title="联系电话" :value="orderInfo.tel"></mt-cell>
        <mt-cell title="收货地址" :value="orderInfo.address"></mt-cell>
      </div>
      <div class="order-operation" >
        <mt-button type="primary" @click="ensureReceived" v-if="orderInfo.state === 1">确认收货</mt-button>
        <mt-button type="default" style="margin-left:10px;" @click="cancelOrder" v-if="orderInfo.state === 0">取消订单</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import DishCell from '../components/DishCell'
  import Cart from '../components/Cart'

  export default {
    name: 'order-info',
    computed: mapGetters([
        'orderInfo'
      ]),
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      ensureReceived(){
          this.$store.dispatch('ensureReceived', { orderId: this.$route.query.orderId });
      },
      cancelOrder(){
        this.$store.dispatch('cancelOrder', { orderId: this.$route.query.orderId });
      }
    },
    mounted(){
      this.$store.dispatch('getOrderInfoById', { orderId: this.$route.query.orderId })
    }
  }
</script>
<style>
  .container {
    display: flex;
    width: 100%;
    margin-top: 40px;
    flex-direction: column;
  }

  .order-shop {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #dfdfdf;
  }

  .order-info {
    border-bottom: 1px solid #dfdfdf;
  }

  .order-user_title {
    title: 20px;
    padding: 10px;
    margin-top: 20px;
  }

  .order-operation {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

</style>

