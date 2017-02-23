<template>
  <div>
    <cell v-for="order in orderList"
          :title="order.shopName"
          :content="'总共'+ order.total + '￥'"
          @cell-click="goOrderInfo">
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
      goOrderInfo(){
        this.$router.go('/orderInfo')
      }
    },
    mounted(){
      this.$store.dispatch('getOrderListByUsername', {username: this.$store.state.login.username})
    }
  }
</script>
