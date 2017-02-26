<template>
  <div>
    <el-card class="box-card order-card" v-for="order in historyOrderList">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">订单--{{ order._id }}--总计{{order.total}}￥</span>
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
  import { mapGetters } from 'vuex'
  export default {
    name: 'HistoryOrders',
    computed: mapGetters([
      'historyOrderList'
    ]),
    mounted(){
      this.$store.dispatch('getHistoryOrderList', {
        shopName: this.$store.state.login.shopName,
        state: 2
      })
    }
  }
</script>
<style>
  .order-card{
    margin: 40px;
  }
</style>
