<template>
  <div>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
    <cell class="shop-cell"
          v-for="order in orderList"
          :title="order.shopName"
          :state = "order.stateText"
          :content="'总共'+ order.total + '￥'"
          :imgURL="order.billLogo && (baseURL + '/' + order.billLogo.url)"
          :imgName="order.billLogo && order.billLogo.name"
          @cell-click="goOrderInfo(order._id)">
    </cell>
    </mt-loadmore>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Cell from '../components/Cell'
  import { baseURL } from '../util/axios'

  export default{
    name: 'order-list',
    data(){
      return {
        baseURL
      }
    },
    computed: mapGetters([
      'orderList'
    ]),
    components: {
      Cell
    },
    methods: {
      goOrderInfo(orderId){
        this.$router.push({path: '/orderInfo', query: { orderId }})
      },
      loadTop(){
        this.$store.dispatch('getOrderListByUsername', {username: this.$store.state.login.username})
        this.$refs.loadmore.onTopLoaded();
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

