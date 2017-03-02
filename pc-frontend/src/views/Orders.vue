<template>
  <div>
    <el-card class="box-card order-card" v-for="order in orderInProgressList">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">订单{{ order._id }}</span>
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
    name: 'Orders',
    computed: mapGetters([
        'orderInProgressList'
    ]),
    mounted(){
      this.$store.dispatch('getOrderInProgressListByShopName', {
          shopName: this.$store.state.login.shopName,
          state: 1
      })
    }
  }
</script>
<style>
  .order-card{
    margin: 40px;
  }
  .userInfo{
    margin-top: 20px;
    font-size: 14px;
  }
  .header{
    font-size:16px;
    width:100%;
    border-bottom:1px solid #ccc;
    margin-bottom: 10px;
    padding: 5px;
  }

</style>
