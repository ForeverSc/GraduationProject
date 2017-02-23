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
          {{ orderInfo.state }}
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
      </div>
      <div class="order-operation">
        <mt-button type="primary">确认收货</mt-button>
        <mt-button type="default" style="margin-left:10px;">取消订单</mt-button>
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
    computed: {
      ...mapGetters([
        'orderInfo'
      ]),
      state(){
          let state = '';
          switch (orderInfo.state){
            case 0 : return '待接单'; break;
            case 1 : return '已接单，制作中'; break;
            case 2 : return '已完成'; break;
            case 3 : return '未完成'; break;
            default: break;
          }
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    },
    mounted(){
      this.$store.dispatch('getOrderInfoById', {orderId: this.$route.query.orderId})
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

