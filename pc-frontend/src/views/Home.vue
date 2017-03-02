<template>
  <div>
    <el-card class="box-card order-card" v-for="order in orderWaitingList">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">订单{{ order._id }}</span>
        <el-button style="float: right;" type="primary" @click="ensureOrder(order._id)">确认接单</el-button>
        <el-button style="float: right; margin-right: 20px;" @click="cancelOrder(order._id)">取消</el-button>
      </div>
      <el-table
        :data="order.dishs"
        border
        style="width: 100%">
        <el-table-column
          prop="dishName"
          label="菜名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="dishPrice"
          label="单价"
          width="180">
        </el-table-column>
        <el-table-column
          prop="dishNum"
          label="数目">
        </el-table-column>
      </el-table>
      <div class="userInfo">
        <div class="header">配送信息</div>
        <div>用户名：{{order.username}}</div>
        <div>联系电话：{{order.tel}}</div>
        <div>收货地址：{{order.address}}</div>
        <div>总计：{{order.total}}￥</div>
      </div>
    </el-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    computed: mapGetters([
      'orderWaitingList'
    ]),
    methods: {
      ensureOrder(orderId){
        this.$store.dispatch('ensureOrder', { orderId })
      },
      cancelOrder(orderId){
        this.$store.dispatch('cancelOrder', { orderId })
      }
    },
    mounted(){
      this.$store.dispatch('getOrderListByShopName', {shopName: this.$store.state.login.shopName, state: 0})
    }
  }
</script>
<style>
  .order-card {
    margin: 40px;
  }
</style>
