<template>
  <div>
    <el-card class="box-card order-card" v-for="order in orderWaitingList">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">订单--{{ order._id }}--总计{{order.total}}￥</span>
        <el-button style="float: right;" type="primary">确认接单</el-button>
        <el-button style="float: right; margin-right: 20px;">取消</el-button>
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
    </el-card>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'Home',
    computed: mapGetters([
      'orderWaitingList'
    ]),
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
