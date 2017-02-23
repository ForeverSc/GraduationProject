<template>
  <div>
    <cell v-for="order in orderList"
          :title="order.shopName"
          :content="'总共'+ order.total + '￥'"
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
        this.$router.push({path: '/orderInfo', query: { orderId}})
      }
    },
    mounted(){
      this.$store.dispatch('getOrderListByUsername', {username: this.$store.state.login.username})
    }
  }
</script>
