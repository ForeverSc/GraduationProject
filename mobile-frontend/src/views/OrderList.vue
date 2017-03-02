<template>
  <div>
    <cell class="shop-cell"
          v-for="order in orderList"
          :title="order.shopName"
          :state = "order.stateText"
          :content="'总共'+ order.total + '￥'"
          :imgURL="order.billLogo && ('http://localhost:3000/' + order.billLogo.url)"
          :imgName="order.billLogo && order.billLogo.name"
          @cell-click="goOrderInfo(order._id)">
    </cell>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Cell from '../components/Cell'

  export default{
    name: 'order-list',
    computed: mapGetters([
      'orderList'
    ]),
    components: {
      Cell
    },
    methods: {
      goOrderInfo(orderId){
        this.$router.push({path: '/orderInfo', query: { orderId }})
      }
    },
    mounted(){
      this.$store.dispatch('getOrderListByUsername', {username: this.$store.state.login.username})
    }
  }
</script>
<style>
  .shop-cell:last-child{
    margin-bottom: 60px;
  }
</style>

